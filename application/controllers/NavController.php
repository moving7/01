<?php

class NavController extends Controller{
	public function index(){
		$pdo=new PDO("mysql:host=127.0.0.1;dbname=bwie;","root","root");
/*		$pdo->query("set names utf8");*/
		$sql="select * from navigation where n_parentid=0";
		$data=$pdo->query($sql)->fetchall(PDO::FETCH_ASSOC);
		//print_r($data);die;
		$this->assign('data', $data);

        $this->render();
	}
	public function add(){
		$data['item_name']=$_POST['value'];
		$count=(new ItemModel)->add($data);

		$this->assign("title","添加成功");
		$this->U("index");

	}
	public function manage($id=0){
		$item=array();
		$postUrl="/Demo/add";
		if($id){
			$item=(new ItemModel)->select($id);
			$postUrl="/Demo/update";
		}
		$this->assign("title","管理条目");
		$this->assign("item",$item);
		$this->assign("postUrl",$postUrl);
		$this->render();
	}
	public function update(){
		$data=array("id" => $_POST['id'],"item_name"=>$_POST['item_name']);
		$count=(new ItemModel)->update($data['id'],$data);

		$this->assign("title","修改成功");
		$this->U("index");

	}
	public function delete($id= null){
		$count=(new ItemModel)->delete($id);

		$this->assign("title","删除成功");
		$this->U("index");
	}

}


?>