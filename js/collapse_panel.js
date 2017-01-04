;(function (window,document) {
	function CollapsePanel(config){
	
			this.collapsePanel=document.getElementById(config.collapsePanel);
		    this.menuHeight=0;
		    if(this.collapsePanel){
		    	
			    this.toggleBtn=this.collapsePanel.getElementsByClassName('collapse-toggle')[0];
			    this.menu=this.collapsePanel.getElementsByClassName('collapse-menu')[0]
			    this.menuList=this.menu.children;
			    
		    
		    }
		      
	if (this.toggleBtn&&this.menuList){
		   	     for (var a=0;a<this.menuList.length;a++) {
		   	     	  this.menuHeight+=1.5;
		   	     }
		   	   
		    	  this._init();
		    }
		  
	    }
  
	     CollapsePanel.prototype={
		     	_init:function (){
		     		     this._bindToggleBtn();
		     		     this._bindMenuList();
		     	},
		     	
		     	_bindToggleBtn:function () {
		     		    var  that=this;
		     		    that.toggleBtn.onclick=function (e) {
					    	   
					    	   if(hasClass(that.collapsePanel,'show')) {
					    	   	     removeClass(that.collapsePanel,'show');
					    	   	     that.menu.style.height=0+'px';
					    	   }else{
					    	   	    addClass(that.collapsePanel,'show');
					    	   	    that.menu.style.height=that.menuHeight+'rem';
					    	   	    
					    	   }
				    	    e.returnValue=false||e.preventDefault();
				    	}
		     	},
	     	
		     	_bindMenuList:function () {
		     		    var  that=this;
		     		   for (var i=0;i<that.menuList.length;i++) {
			     		   	that.menuList[i].onclick=function (e) {
						    	   if(hasClass(this,'active')) {
						    	   	    return;
						    	   	     
						    	   }else{
						    	   	   var active=that.menu.getElementsByClassName('active')[0];
						    	   	   removeClass(active,'active')
						    	   	   addClass(this,'active');
						    	   }
					    	     e.returnValue=false||e.preventDefault();
					    	}
		     		   }
		     		   
		     	}
	     }
	   
	  
     window['CollapsePanel']=CollapsePanel;
    
    function hasClass(dom,classItem){
    	//\bshow\b|(\s+)show(\s+)
    	reg=new RegExp('\\b'+classItem+'\\b','g');
    	 return reg.test(dom.className);
    	
    }
    function addClass(dom,classItem) {
    	if(!hasClass(dom,classItem)){
    		dom.className=dom.className+' '+classItem;
    	}
    	return dom.className;
    }
    function removeClass(dom,classItem){
    	     reg=new RegExp('\\b'+classItem+'\\b|(\s+)+'+classItem+'(\s+)','g');
    	      dom.className=trim(dom.className.replace(reg,' '));
    	      
    }
    function trim(str){
    	var reg=/^(\s)*|(\s)*$/g;
    	str=str||'';
    	return str.replace(reg,'');
    }
   
    
})(window,document);
		
