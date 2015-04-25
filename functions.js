

var favList = [];
var xmlhttp;
var x;
var temp = "";

var obj;

function coolStuff(url) 
{
  originalGistList = loadXMLDoc(url);
}

function loadXMLDoc(url) //I borrowed the bulk of this code from the w3schools website to help me get the xmlhttp object set up correctly
{

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
      obj = JSON.parse(xmlhttp.responseText);

      for (x = 0; x < obj.length; x++)
      {
        
        temp = temp + '<li>' + '<input type="checkbox" name="rList" value="' + x + '" onclick="favTog(this.checked, this.value)">' + obj[x].description + '<br>' + '<a href="' + obj[x].html_url + '">' + obj[x].html_url + '</a>' + '</li>';
        
      }
      temp = '<ul style="list-style-type:none">' + temp + '</ul>';
     document.getElementById('result').innerHTML = temp;
    }
 }

xmlhttp.open("GET",url,true);
xmlhttp.send();

}



function favTog(stat,num)
{

  var tempList = [];
  var temp2 = "";

  document.getElementById('favs').innerHTML = "";

  if (stat == true)
  {
    favList[favList.length] = obj[num];
  }
  else
  {
    for (x = 0; x < favList.length; x++)
    {
      if ( obj[num].id != favList[x].id )
      {
        tempList[tempList.length] = favList[x];
      }
    }
    favList = tempList;
  }

  for (x = 0; x < favList.length; x++)
  {
    temp2 = temp2 + '<li>' + '<input type="checkbox" name="fList" value="' + x + '" onclick="">' + favList[x].description + '<br>' + '<a href="' + favList[x].html_url + '">' + favList[x].html_url + '</a>' + '</li>';
  }
 
  temp2 = '<ul style="list-style-type:none">' + temp2 + '</ul>';
  document.getElementById('favs').innerHTML = temp2;

}


/*
if (!xmlhttp)
  alert("Some kind of failure!");
else
    return xmlhttp;

xmlhttp.onreadystatechange=function()
  {
  
if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById('result').innerHTML=xmlhttp.responseText;
    }

      xmlhttp.open("GET",url,true);
  xmlhttp.send();
}
*/



