/**
  **************************************************************************************************
  **********  CLPHP����ϵͳ2015 WEB��ٷ���ʽ��  *****  �ٷ����� *** ��Ȩ���� *** ����ؾ�  **********
  **********------------------------------------------------------------------------------**********
  * �ٷ���վ��http://www.chunleinet.com/ �ٷ����̣�http://jxlcl.taobao.com/  *  �ٷ���������:chunlei2615 ����׼�ٹ��� *
  **************************************************************************************************
*/
window.onerror = function(){return true;}
function $(id){return document.getElementById(id);}  
function getHeight(){$("bdfahuo").style.height=$("bdforml").offsetHeight-85+"px";}  
window.onload = function(){getHeight();}  
/*///////////////////////////////////////// BDORDERJSFGX /////////////////////////////////////////*/
function postcheck(){
	try{
		if (document.bdform.bdproduct.value==""){
			alert('��ѡ������Ĳ�Ʒ��');
			document.bdform.bdproduct.focus();
			return false;
		}
    }
    catch(ex){
    }
	 try{
		if (document.bdform.bdnum.value==""){
			alert('����д������������');
			document.bdform.bdnum.focus();
			return false;
		}
		var bdform = /^\d*$/;
		if (!bdform.test(document.bdform.bdnum.value)){
			alert('������д����ȷ����������д��');
			document.bdform.bdnum.focus();
			return false;
		}
    
    }
    catch(ex){
    } 
    try{
		if (document.bdform.bdname.value==""){
			alert('����д������');
			document.bdform.bdname.focus();
			return false;
		}
		var bdname = /^[\u4e00-\u9fa5]{2,6}$/;
		if (!bdname.test(document.bdform.bdname.value)){
			alert('������ʽ����ȷ����������д��');
			document.bdform.bdname.focus();
			return false;
		}
    }
    catch(ex){
    } 	
    try{
		if (document.bdform.bdmob.value==""){
			alert('����д��ϵ�绰��');
			document.bdform.bdmob.focus();
			return false;
				
    }
	var bdform = /^\d*$/;
		if (!bdform.test(document.bdform.bdmob.value)){
			alert('�绰��ʽ����ȷ����������д��');
			document.bdform.bdmob.focus();
			return false;
		}
    }
    catch(ex){
    } 	
    
    try{
		if (document.bdform.bdaddress.value==""){
			alert('����д�ջ���ַ��');
			document.bdform.bdaddress.focus();
			return false;
		}
    }
    catch(ex){
    } 	
    	
   
    document.bdform.bdsubmit.disabled = true;
    
    return true;
}
try{	
new PCAS("bdprovince","bdcity","bdarea");
}
catch(ex){
} 	
try{	
	var thissrc = document.getElementById("bdcode").src;
	function refreshCode(){
		document.getElementById("bdcode").src=thissrc+"?bdaction=codeimg&imgw=70&imgh=29&temp="+Math.random(); 
	}
}
catch(ex){
} 	
/*///////////////////////////////////////// BDORDERJSFGX /////////////////////////////////////////*/
function pricea(){
	var bdproduct = document.bdform.bdproduct.alt;
	for(var i=0;i<document.bdform.bdproduct.length;i++){
		if(document.bdform.bdproduct[i].checked==true){
			var bdproduct = document.bdform.bdproduct[i].alt;
			break;
		}
	}
    if(document.bdform.bdnum.value=="" || document.bdform.bdnum.value==0){	
		var bdnum=1;
	}
	else{
		var bdnum=document.bdform.bdnum.value;
	}	
	var bdprice=bdproduct*bdnum;
	document.bdform.bdprice.value=bdprice;
	document.getElementById("showprice").innerHTML=bdprice;
}
function priceb(){
    var bdcpxljg = document.getElementById("bdproduct");
    var bdproduct = bdcpxljg.options[document.getElementById("bdproduct").options.selectedIndex].title; 
    if(document.bdform.bdnum.value=="" || document.bdform.bdnum.value==0){	
		var bdnum=1;
	}
	else{
		var bdnum=document.bdform.bdnum.value;
	}	
	var bdprice=bdproduct*bdnum;
	document.bdform.bdprice.value=bdprice;
	document.getElementById("showprice").innerHTML=bdprice;
}
/*///////////////////////////////////////// BDORDERJSFGX /////////////////////////////////////////*/



function changeItem(i){
    var k = 3;
	for(var j = 0;j < k;j++){
	    if(j == i){
		    document.getElementById("paydiv" + j).style.display = "block";
		}
		else{		
		    document.getElementById("paydiv" + j).style.display = "none";
		}
	}
}
function opay(){
	document.getElementById("bdform").target="_parent";
}
function opay2(){
    document.getElementById("bdform").target="_blank";
}
/*///////////////////////////////////////// BDORDERJSFGX /////////////////////////////////////////*/
document.getElementById("referer").value = opener?opener.location.href:(top.document.referrer?top.document.referrer:top.location.href);
document.getElementById("url").value = top.location.href;
document.getElementById("purl").value = document.location;
/*///////////////////////////////////////// BDORDERJSEND /////////////////////////////////////////*/