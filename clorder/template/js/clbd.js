    /**
  **************************************************************************************************
  **********  CLPHP����ϵͳ2015 WEB��ٷ���ʽ��  *****  �ٷ����� *** ��Ȩ���� *** ����ؾ�  **********
  **********------------------------------------------------------------------------------**********
  * �ٷ���վ��http://www.chunleinet.com/ �ٷ����̣�http://jxlcl.taobao.com/  *  �ٷ���������:chunlei2615 ����׼�ٹ��� *
  **************************************************************************************************
*/

window.onerror=function(){return true;} 

function $(id){return document.getElementById(id);}  

function getHeight(){$("clfahuo").style.height=$("clforml").offsetHeight-86+"px";} 

window.onload=function(){getHeight();}

/*//////////////////////////// CLORDERJSFGX ////////////////////////////*/

function postcheck(){

	var ifname=/^[\u4e00-\u9fa5]{2,6}$/;

	var ifmob=/^1[3,4,5,7,8]\d{9}$/;

    var ifqq=/^\d{5,15}$/;

	var ifemail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;




	try{

		if(document.clform.bdproduct.value==""){

			alert('��ѡ������Ĳ�Ʒ��');


			return false;
			
}
		}catch(ex){}

    try{
		if(document.clform.bdname.value==""){

			alert('����д������');

			document.clform.bdname.focus();

			return false;

		}
		

		if(!ifname.test(document.clform.bdname.value)){

			alert('������ʽ����ȷ����������д��');

			document.clform.bdname.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdmob.value==""){

			alert('����д�ֻ����룡');

			document.clform.bdmob.focus();

			return false;

		}

		if(!ifmob.test(document.clform.bdmob.value)){

			alert('�ֻ������ʽ����ȷ����������д��');

			document.clform.bdmob.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdprovince.value==""){

			alert('��ѡ�����ڵ�����');

			document.clform.bdprovince.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdaddress.value==""){

			alert('����д��ϸ��ַ��');

			document.clform.bdaddress.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdqq.value==""){

			alert('����дQQ���룡');

			document.clform.bdqq.focus();

			return false;

		}

		if(!ifqq.test(document.clform.bdqq.value)){

			alert('QQ�����ʽ����ȷ����������д��');

			document.clform.bdqq.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdemail.value==""){

			alert('����дE-MAIL��');

			document.clform.bdemail.focus();

			return false;

		}

		if(!ifemail.test(document.clform.bdemail.value)){

			alert('E-MAIL��ʽ����ȷ����������д��');

			document.clform.bdemail.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.clcode.value==""){

			alert('����д��֤�룡');

			document.clform.clcode.focus();

			return false;

		}

    }catch(ex){}

    try{

		var onbdpay=document.getElementsByName("bdpay"); 

		for(var i=0;i<onbdpay.length;i++){

			if(onbdpay[i].checked){

			var bdpay=onbdpay[i].value;

			}

		}

		if(bdpay=="alipay"||bdpay=="bank"){

			document.clform.bdsubmit.value="�����ύ";

		}

		else{

			document.clform.bdsubmit.value="�����ύ�����Ե� >>";

		}

		return true;

    }catch(ex){}

}

/*//////////////////////////// CLORDERJSFGX ////////////////////////////*/

try{

	new PCAS("bdprovince","bdcity","bdarea");

}catch(ex){}

try{

	var thissrc=document.getElementById("clcode").src;

	function refreshCode(){

		document.getElementById("clcode").src=thissrc+"temp="+Math.random(); 

	}

}catch(ex){}

/*//////////////////////////// CLORDERJSFGX ////////////////////////////*/

function pricea(){

	var bdproduct=document.clform.bdproduct.alt;

	for(var i=0;i<document.clform.bdproduct.length;i++){

		if(document.clform.bdproduct[i].checked==true){

			var bdproduct=document.clform.bdproduct[i].alt;

			break;

		}

	}

    if(document.clform.bdnum.value==""||document.clform.bdnum.value==0){	

		var bdnum=1;

	}

	else{

		var bdnum=document.clform.bdnum.value;

	}	

	var bdprice=bdproduct*bdnum;

	document.clform.bdprice.value=bdprice;

	document.getElementById("showprice").innerHTML=bdprice;

}

function priceb(){

    var clcpxljg=document.getElementById("bdproduct");

    var bdproduct=clcpxljg.options[document.getElementById("bdproduct").options.selectedIndex].title; 

    if(document.clform.bdnum.value==""||document.clform.bdnum.value==0){	

		var bdnum=1;

	}

	else{

		var bdnum=document.clform.bdnum.value;

	}	

	var bdprice=bdproduct*bdnum;

	document.clform.bdprice.value=bdprice;

	document.getElementById("showprice").innerHTML=bdprice;

}

function pricec(){

	var bdnum=0;

	var bdprice=0;	

	var obj=document.getElementsByName("box");

    for(var i=0;i<obj.length;i++){

		if(obj[i].checked){

			bdnum++;

			bdprice+=parseInt(obj[i].alt);

		}

	}
	

	document.clform.bdnum.value=bdnum;

	document.clform.bdprice.value=bdprice;

	document.getElementById("showmun").innerHTML=bdnum;

	document.getElementById('showprice').innerHTML=bdprice;
	var str=document.getElementsByName("box");
var objarray=str.length;
var chestr="";
for (i=0;i<objarray;i++)
{  if(str[i].checked == true)
  {
   chestr+=str[i].value+",";
  }
}
if(chestr == "")
{
  alert("��ѡ������Ĳ�Ʒ��");
  
}
else
{
  document.clform.bdproduct.value =chestr;
}

}



/*//////////////////////////// CLORDERJSFGX ////////////////////////////*/
function changeItem(i){

    var k=3;

	for(var j=0;j<k;j++){

	    if(j==i){

		    document.getElementById("paydiv"+j).style.display="block";

		}

		else{		

		    document.getElementById("paydiv"+j).style.display="none";

		}

	}

}

function opay(){

	document.getElementById("clform").target="_parent";

}

function opay2(){

    document.getElementById("clform").target="_blank";

}
/*//////////////////////////// CLORDERJSFGX ////////////////////////////*/
document.getElementById("referer").value = opener?opener.location.href:(top.document.referrer?top.document.referrer:top.location.href);
document.getElementById("url").value = top.location.href;
document.getElementById("purl").value = document.location;
/*//////////////////////////// CLORDERJSEND ////////////////////////////*/