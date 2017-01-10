;(function (window,document) {
	function SideNav(config){
	
			this.toggleBtn=document.getElementById(config.btn);
		    this.nav=document.getElementById(config.nav);
		    this.wrapper=document.getElementById(config.wrapper);
		    if(this.nav){
		    	
		    	this.moreBtns=this.nav.getElementsByClassName('more');
		    	
		    }
		      
		   if (this.toggleBtn&&this.wrapper){
		   	     
		    	  this._bindEvent();
		    }
		   
	    }
   
	     SideNav.prototype={
		     	_bindEvent:function (){
		     		     this._bindToggleBtn();
		     		     if(this.moreBtns){
		     		     	 this._bindMoreBtn();
		     		     }
		     		    
		     	},
		     	
		     	_bindToggleBtn:function () {
		     		    var  that=this;
		     		    that.toggleBtn.onclick=function () {
					    	   if(hasClass(this,'show')) {
					    	   	     removeClass(this,'show');
					    	   	     removeClass(that.nav,'show');
					    	   	     removeClass(that.wrapper,'show');
					    	   	     
					    	   }else{
					    	   	    addClass(this,'show');
					    	   	    addClass(that.nav,'show');
					    	   	    addClass(that.wrapper,'show');
					    	   	    
					    	   }
				    	
				    	}
		     	},
	     	
		     	_bindMoreBtn:function () {
		     		    var  that=this;
		     		    for (var i=0;i<that.moreBtns.length;i++){
		     		    	var moreBtn=that.moreBtns[i];
		     		    	that.moreBtns[i].children[0].addEventListener('click',function (e) {
					    	 
					    	  if(hasClass(moreBtn,'show')) {
					    	   	     removeClass(moreBtn,'show')
					    	   	     
					    	   }else{
					    	   	   addClass(moreBtn,'show');
					    	   }
				    	     e.returnValue=false||e.preventDefault();
				    		});
		     		    }
		     		   
				    	
		     	}
	     }
	   
	  
	   window['SideNav']=SideNav;
    
    function hasClass(dom,classItem){
    	//\bshow\b|(\s+)show(\s+)
    	var reg=new RegExp('\\b'+classItem+'\\b','g');
    	 return reg.test(dom.className);
    	
    }
    function addClass(dom,classItem) {
    	if(!hasClass(dom,classItem)){
    		dom.className=dom.className+' '+classItem;
    	}
    	return dom.className;
    }
    function removeClass(dom,classItem){
    	     var reg=new RegExp('\\b'+classItem+'\\b|(\s+)+'+classItem+'(\s+)','g');
    	      dom.className=trim(dom.className.replace(reg,' '));
    	      
    }
    function trim(str){
    	var reg=/^(\s)*|(\s)*$/g;
    	str=str||'';
    	return str.replace(reg,'');
    }
})(window,document);
		
