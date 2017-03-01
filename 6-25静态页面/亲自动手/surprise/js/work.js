window.onload=function(){
	var timer=null;
	var time=2000;
document.onmouseover=function(){
	setTimeout(function(){

	document.body.scrollLeft=(document.body.clientWidth-document.documentElement.offsetWidth)/2;
	
	time+=2000;
	},time)
	clear(timer);

}
}