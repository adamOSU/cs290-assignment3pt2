

var favList = [];
var xmlhttp;
var x;
var y;
var temp = "";
var obj;

window.onload = function()
{
  document.getElementById('favs').innerHTML = localStorage.getItem("favorites");
}



function coolStuff(url) 
{
  loadXMLDoc(url);
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
        
        temp = temp + '<li>' + '<input type="checkbox" name="rList" value="' + obj[x].id + '" onclick="favTog(this.checked, this.value)">' + obj[x].description + '<br>' + '<a href="' + obj[x].html_url + '">' + obj[x].html_url + '</a>' + '</li>';
        
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
  var bool = false;
  var temp3 = "";

  document.getElementById('favs').innerHTML = "";
  //This section adds an item to the favorite list if checked, and removes it if unchecked
  if (stat == true)
  {
    for (x = 0; x < obj.length; x++)
    {
      if (obj[x].id == num)
      {
        favList[favList.length] = obj[x];
      }
    }
    
  }
  else
  {
    for (x = 0; x < favList.length; x++)
    {
      if ( num != favList[x].id )
      {
        tempList[tempList.length] = favList[x];
      }
    }
    favList = tempList;
  }
  //This section prints the completed fav list
  for (x = 0; x < favList.length; x++)
  {
    temp2 = temp2 + '<li>' + '<input type="checkbox" name="fList" value="' + favList[x].id + '" onclick="favRemove(this.checked, this.value)">' + favList[x].description + '<br>' + '<a href="' + favList[x].html_url + '">' + favList[x].html_url + '</a>' + '</li>';
  }
 
  temp2 = '<ul style="list-style-type:none">' + temp2 + '</ul>';
  document.getElementById('favs').innerHTML = "";
  document.getElementById('favs').innerHTML = temp2;
  localStorage.setItem("favorites", temp2);

  //This section reprints the results list so that it does not include the favlist items
  for (x = 0; x < obj.length; x++)
  {
    bool = false;
    for (y=0; y < favList.length; y++)
    {
      if (obj[x].id == favList[y].id)
      {
        bool = true;
      }

    }

    if (bool == false)
    {
     temp3 = temp3 + '<li>' + '<input type="checkbox" name="rList" value="' + obj[x].id + '" onclick="favTog(this.checked, this.value)">' + obj[x].description + '<br>' + '<a href="' + obj[x].html_url + '">' + obj[x].html_url + '</a>' + '</li>';
    }
  }
  
  temp3 = '<ul style="list-style-type:none">' + temp3 + '</ul>';
  document.getElementById('result').innerHTML = "";
  document.getElementById('result').innerHTML = temp3;


}

function favRemove(stat,num)
{

  var tempList2 = [];
  var temp4 = "";
  var temp5 = "";

  //This loop removes the checked fav item from the fav list
  for (x = 0; x < favList.length; x++)
  {
    if (favList[x].id != num)
    {
      tempList2[tempList2.length] = favList[x];
    }
  }
  favList = tempList2;

  //This section prints the updated fav list
  for (x = 0; x < favList.length; x++)
  {
    temp4 = temp4 + '<li>' + '<input type="checkbox" name="fList" value="' + favList[x].id + '" onclick="favRemove(this.checked, this.value)">' + favList[x].description + '<br>' + '<a href="' + favList[x].html_url + '">' + favList[x].html_url + '</a>' + '</li>';
  }
 
  temp4 = '<ul style="list-style-type:none">' + temp4 + '</ul>';
  document.getElementById('favs').innerHTML = "";
  document.getElementById('favs').innerHTML = temp4;
  localStorage.setItem("favorites", temp4);

  //This section reprints the results list so that it does not include the favlist items
  for (x = 0; x < obj.length; x++)
  {
    bool = false;
    for (y=0; y < favList.length; y++)
    {
      if (obj[x].id == favList[y].id)
      {
        bool = true;
      }

    }

    if (bool == false)
    {
     temp5 = temp5 + '<li>' + '<input type="checkbox" name="rList" value="' + obj[x].id + '" onclick="favTog(this.checked, this.value)">' + obj[x].description + '<br>' + '<a href="' + obj[x].html_url + '">' + obj[x].html_url + '</a>' + '</li>';
    }
  }
  
  temp5 = '<ul style="list-style-type:none">' + temp5 + '</ul>';
  document.getElementById('result').innerHTML = "";
  document.getElementById('result').innerHTML = temp5;

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



