<?php
header("content-type:text/html;charset=utf-8");
class IndexController extends Controller{
	public function index(){
		$pdo=new PDO("mysql:host=127.0.0.1;dbname=bwie;","root","root");
		$pdo->query("set names utf8");
		$sql="select * from navigation where n_parentid=0";
		$data=$pdo->query($sql)->fetchall(PDO::FETCH_ASSOC);
		//print_r($data);die;
		/*$sql="select * from navigation where n_parentid!=0";
		$info=$pdo->query($sql)->fetchall(PDO::FETCH_ASSOC);
		foreach ($data as $key => $value) {
			foreach ($info as $k => $v) {
			
			if($value['nid']=$info[$k]['n_parentid']){
				$data[$k]["info"]=$info;
			}
		}
		}*/
		//print_r($data);die;
		$sql="select * from navigation where n_parentid!=0";
		$info=$pdo->query($sql)->fetchall(PDO::FETCH_ASSOC);

		$sql="select * from baweiren";
		$demo=$pdo->query($sql)->fetchall(PDO::FETCH_ASSOC);

		$this->assign('data', $data);
		$this->assign('info', $info);
		$this->assign('demo', $demo);

        $this->render();
	}
	public function index1(){
		$pdo=new PDO("mysql:host=127.0.0.1;dbname=bwie;","root","root");
		$pdo->query("set names utf8");
		$sql="select * from navigation where n_parentid=0";
		$data=$pdo->query($sql)->fetchall(PDO::FETCH_ASSOC);
		//print_r($data);die;
		/*$sql="select * from navigation where n_parentid!=0";
		$info=$pdo->query($sql)->fetchall(PDO::FETCH_ASSOC);
		foreach ($data as $key => $value) {
			foreach ($info as $k => $v) {
			
			if($value['nid']=$info[$k]['n_parentid']){
				$data[$k]["info"]=$info;
			}
		}
		}*/
		//print_r($data);die;
		$sql="select * from navigation where n_parentid!=0";
		$info=$pdo->query($sql)->fetchall(PDO::FETCH_ASSOC);
		$this->assign('data', $data);
		$this->assign('info', $info);
		$this->render();
	}
	

	}