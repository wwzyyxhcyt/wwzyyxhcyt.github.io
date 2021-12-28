// JavaScript Document
var that;
class AsideNav{
	constructor(className){
		//导航主区域
		this.main=document.querySelector(className);
		//li
		this.lis=this.main.querySelectorAll(".nav-list .item");
		//父导航
		this.parentNavs=this.main.querySelectorAll(".nav-list .item .a");
		that=this;
		//绑定事件
		this.init();
	}
	init(){
		for (var i=0;i<this.lis.length;i++){
			//注意this的指向问题
			this.parentNavs[i].onclick=this.toggleNav;
		}
	}
	//清除li的active类
	clearClass(){
		for (var i=0;i<this.lis.length;i++){
			this.lis[i].className='item';
		}
	}
	//切换
	toggleNav(){
		var li=this.parentNode;
		if(li.classList.contains("active")){
			li.classList.remove("active");
		}else{
			that.clearClass();
			li.classList.add("active");
		}
	}
}
var asideNav=new AsideNav("#drawer-right");