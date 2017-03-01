window.onload=function()
{
	var oDiv=document.getElementById('nav');
	var aStrong=oDiv.getElementsByTagName('strong');
	var aA=oDiv.getElementsByTagName('a');
	var iTarget=oDiv.getElementsByTagName('li')[0].offsetHeight;
 	var iProduct=document.getElementById('product');
 	var iImg=getByClass(iProduct,'img');

	for(var i=0; i<aStrong.length; i++)
	{
		aA[i].style.width=aStrong[i].style.width=aStrong[i].getElementsByTagName('span')[0].offsetWidth+10+'px';
		oDiv.style.width=aStrong[i].getElementsByTagName('span')[0].offsetWidth*aA.length+50+'px';
		aStrong[i].style.position='absolute';
		aStrong[i].style.top=aStrong[i].style.left=0;
		
		aStrong[i].onmouseover=function()
		{
			startMove1(this, -iTarget);
			 //alert(this.getElementsByTagName('span')[1].getElementsByTagName('hr')[0].offsetWidth)
			 startMove3(this.getElementsByTagName('span')[1].getElementsByTagName('hr')[0],this.getElementsByTagName('span')[0].offsetWidth-20)
			 // alert(getByClass(this.getElementsByTagName('span')[1],'spanHr').offsetWidth)
		};
		aStrong[i].onmouseout=function()
		{
			startMove1(this, 0);
			startMove3(this.getElementsByTagName('span')[1].getElementsByTagName('hr')[0],0)
		};
	}

	for (var i = 0; i < iImg.length; i++) {
		iImg[i].onmouseover=function(){
			//alert('1')
			//getByClass(this,'wrapper')[0].style.display='block';
			//alert(getElementTotalHeight(getByClass(this,'innerImg1')[0]))
			 starMove2(getByClass(this,'wrapper')[0],this.offsetHeight,function(){
			 starMove2(getByClass(this,'innerImg'+i)[0],getElementTotalHeight(getByClass(this,'innerImg'+i)[0]))
			});
		}
		iImg[i].onmouseout=function(){
			//alert('1')
			starMove2(getByClass(this,'wrapper')[0],0);
			//getByClass(this,'wrapper')[0].style.display='none';
			 
		}
	};

};
 
 function getByClass(oParent,oClass){
		var oRes=oParent.getElementsByTagName('*');
		// var re=new RegExp('\\b'+oClass+'\\b','i');
		var re=eval('/\\b'+oClass+'\\b/i');
		var arr=[];
		for (var i = 0; i < oRes.length; i++) {
			if(re.test(oRes[i].className)){
			//if (oRes[i].className==oClass) {
				arr.push(oRes[i]);
			};
		};

		return arr;

	}
	function startMove1(obj,target)
	{
	clearInterval(obj.iTime);
	obj.iTime=setInterval(function(){
		if(obj.offsetTop==target)
		{
			clearInterval(obj.iTime);
		}
		else
		{
			var iSpeed=(target-obj.offsetTop)/4;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			obj.style.top=obj.offsetTop+iSpeed+'px';
		}
	}, 30);
}
function startMove3(obj,target)
	{
	clearInterval(obj.iTime);
	obj.iTime=setInterval(function(){
		if(obj.offsetWidth==target)
		{
			clearInterval(obj.iTime);
		}
		else
		{
			var iSpeed=(target-obj.offsetWidth)/4;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			obj.style.width=obj.offsetWidth+iSpeed+'px';
		}
	}, 80);
}
	function starMove2(obj,target,element,fn){
	clearInterval(obj.iTime);
	obj.iTime=setInterval(function(){
		if(obj.offsetHeight==target)
		{
			clearInterval(obj.iTime);
			fn&&fn();
		}
		else
		{
			var iSpeed=(target-obj.offsetHeight)/4;
			iSpeed*=0.2;

			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			obj.style.height=obj.offsetHeight+iSpeed+'px';

		}
	},30)
}
	function getElementTotalHeight(parent){
	var  totalElement=parent.getElementsByTagName('*');
	var  totalHeight=0;
	for (var i = 0; i < totalElement.length; i++) {
		totalHeight+=totalElement[i].offsetHeight;
	};
	return totalHeight;
}