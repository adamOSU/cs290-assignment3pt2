



function loadXMLDoc(url) //I borrowed the bulk of this code from the w3schools website to help me get the xmlhttp object set up correctly
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById('result').innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
/*
if (!xmlhttp)
  alert("Some kind of failure!");
else
    return xmlhttp;
*/

}


/*

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById('A1').innerHTML=xmlhttp.status;
    document.getElementById('A2').innerHTML=xmlhttp.statusText;
    document.getElementById('A3').innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();



*/