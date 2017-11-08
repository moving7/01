<?php
/**
 * fastphp框架核心
 */

class Fastphp
{
	protected $_config = [];

	public function __construct($config)
	{
		$this->_config=$config;
	}
	 // 运行程序
    public function run()
    {   
        //将函数注册到SPL __autoload函数栈中。如果该栈中的函数尚未激活，则激活它们。
        spl_autoload_register(array($this, 'loadClass'));
        $this->setReporting();
        $this->removeMagicQuotes();
        $this->unregisterGlobals();
        $this->setDbConfig();
        $this->route();
    }
     // 路由处理
    public function route()
    {
        $controllerName = $this->_config['defaultController'];
        $actionName = $this->_config['defaultAction'];
        $param = array();

        $url = $_SERVER['REQUEST_URI'];
        // 清除?之后的内容
        $position = strpos($url, '?');
        $url = $position === false ? $url : substr($url, 0, $position);
        // 删除前后的“/”
        $url = trim($url, '/');

        if ($url) {
            // 使用“/”分割字符串，并保存在数组中
            $urlArray = explode('/', $url);
            // 删除空的数组元素
            $urlArray = array_filter($urlArray);//用回调函数过滤数组中的元素：
            
            // 获取控制器名
            $controllerName = ucfirst($urlArray[0]);//将字符串第一个字符改大写
            
            // 获取动作名
            array_shift($urlArray);//删除数组中的第一个元素（red），并返回被删除元素的值
            $actionName = $urlArray ? $urlArray[0] : $actionName;
            
            // 获取URL参数
            array_shift($urlArray);
            $param = $urlArray ? $urlArray : array();
        }

        // 判断控制器和操作是否存在
        $controller = $controllerName . 'Controller';
        if (!class_exists($controller)) {
            exit($controller . '控制器不存在');
        }
        if (!method_exists($controller, $actionName)) {
            exit($actionName . '方法不存在');
        }

        // 如果控制器和操作名存在，则实例化控制器，因为控制器对象里面
        // 还会用到控制器名和操作名，所以实例化的时候把他们俩的名称也
        // 传进去。结合Controller基类一起看
        $dispatch = new $controller($controllerName, $actionName);

        // $dispatch保存控制器实例化后的对象，我们就可以调用它的方法，
        // 也可以像方法中传入参数，以下等同于：$dispatch->$actionName($param)
        call_user_func_array(array($dispatch, $actionName), $param);
        //调用回调函数，并把一个数组参数作为回调函数的参数
    }

    // 检测开发环境
    public function setReporting()
    {
        if (APP_DEBUG === true) {
            // // 报告所有错误
            error_reporting(E_ALL);
            ini_set('display_errors','On');
            //后者的权限大于前者
        } else {
            error_reporting(E_ALL);
            ini_set('display_errors','Off');
            //在正式环境下用这个就行了，把错误信息记录在日志里。正好可以关闭错误回显
            //将PHP的log_errors开启即可，默认是记录到WEB服务器的日志文件里
            ini_set('log_errors', 'On');
        }
    }
     // 删除敏感字符////该函数通过数组进行导航，删除函数值中的斜线。
    public function stripSlashesDeep($value)
    {   
        //将函数作用到数组中的每个值上，每个值都乘以本身，并返回带有新值的数组：
        //array_map有点像是一个过滤器，把value中的每一个元素丢进第一个参数指定的函数中处理一下，再放回数组中原来的位置。
        $value = is_array($value) ? array_map(array($this, '            stripSlashesDeep'), $value) : stripslashes($value);
        //stripslashes() 函数删除由 addslashes() 函数添加的反斜杠。
        return $value;
    }
     // 检测敏感字符并删除
    public function removeMagicQuotes()
    {   
    //magic_quotes_gpc函数在php中的作用是判断解析用户提示的数据，如包括有:post、get、cookie过来的数据增加转义字符“\\”，以确保这些数据不会引起程序，特别是数据库语句因为特殊字符引起的污染而出现致命的错误
        if (get_magic_quotes_gpc()) {       
            $_GET = isset($_GET) ? $this->stripSlashesDeep($_GET ) : '';
            $_POST = isset($_POST) ? $this->stripSlashesDeep($_POST ) : '';
            $_COOKIE = isset($_COOKIE) ? $this->stripSlashesDeep($_COOKIE) : '';
            $_SESSION = isset($_SESSION) ? $this->stripSlashesDeep($_SESSION) : '';
        }
    }
     // 检测自定义全局变量并移除。因为 register_globals 已经弃用，如果
    // 已经弃用的 register_globals 指令被设置为 on，那么局部变量也将
    // 在脚本的全局作用域中可用。 例如， $_POST['foo'] 也将以 $foo 的
    // 形式存在，这样写是不好的实现，会影响代码中的其他变量。 相关信息，
    // 参考: http://php.net/manual/zh/faq.using.php#faq.register-globals
    public function unregisterGlobals()
    {
        if (ini_get('register_globals')) {
            $array = array('_SESSION', '_POST', '_GET', '_COOKIE', '_REQUEST', '_SERVER', '_ENV', '_FILES');
            foreach ($array as $value) {
                foreach ($GLOBALS[$value] as $key => $var) {
                    if ($var === $GLOBALS[$key]) {
                        unset($GLOBALS[$key]);
                    }
                }
            }
        }
    }
    // 配置数据库信息
    public function setDbConfig()
    {
        if ($this->_config['db']) {
            Model::setDbConfig($this->_config['db']);
        }
    }
    // 自动加载控制器和模型类 
    public static function loadClass($class)
    {
        $frameworks = __DIR__ . '/' . $class . '.php';
        $controllers = APP_PATH . 'application/controllers/' . $class . '.php';
        $models = APP_PATH . 'application/models/' . $class . '.php';

        if (file_exists($frameworks)) {
            // 加载框架核心类
            include $frameworks;
        } elseif (file_exists($controllers)) {
            // 加载应用控制器类
            include $controllers;
        } elseif (file_exists($models)) {
            //加载应用模型类
            include $models;
        } else {
            // 错误代码
        }
    }	
}


?>