var favList = [];
var xmlhttp;
var x;
var y;
var temp = "";
var obj;
var bool = false;

window.onload = function()
{
  if ((localStorage.getItem("favorites") != null) && (localStorage.getItem("favorites") != '<ul style="list-style-type:none"></ul>'))
  {
   favList = JSON.parse(localStorage["favorites"]);    //I learned this JSON Stringify/Parse trick from a post on StackOverflow
   //alert(favList[0]);
   printFavorites();
  }
}



function coolStuff(url) 
{
  loadXMLDoc(url);
}

function loadXMLDoc(url) //I borrowed the bulk of the XMLHttpRequest code from the w3schools website to help me get the xmlhttp object set up correctly
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

      printResults();
    }
 }

xmlhttp.open("GET",url,true);
xmlhttp.send();

}


function favTog(stat,num)
{

  var tempList = [];
  
  
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

  printFavorites();
  printResults();


}

function favRemove(stat,num)
{

  var tempList2 = [];

  //This loop removes the checked fav item from the fav list
  for (x = 0; x < favList.length; x++)
  {
    if (favList[x].id != num)
    {
      tempList2[tempList2.length] = favList[x];
    }
  }
  favList = tempList2;


  printFavorites();
  printResults();

}

function printResults()
{
  var tempHTML = "";
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
      if (obj[x].description == "")
      {
        obj[x].description = "NO DESCRIPTION";
      }
     tempHTML = tempHTML+ '<li>' + '<input type="checkbox" name="rList" value="' + obj[x].id + '" onclick="favTog(this.checked, this.value)">' + '<a href="' + obj[x].html_url + '">' + obj[x].description + '</a>' + '<br>' + '</li>';
    }
  }
  
  tempHTML = '<ul style="list-style-type:none">' + tempHTML + '</ul>';
  document.getElementById('result').innerHTML = "";
  document.getElementById('result').innerHTML = tempHTML;

}


function printFavorites()
{
  
  var tempHTML = "";

  //This section prints the updated fav list
  for (x = 0; x < favList.length; x++)
  {
    tempHTML = tempHTML + '<li>' + '<input type="checkbox" name="fList" value="' + favList[x].id + '" onclick="favRemove(this.checked, this.value)">' + favList[x].description + '<br>' + '<a href="' + favList[x].html_url + '">' + favList[x].html_url + '</a>' + '</li>';
  }
 
  tempHTML = '<ul style="list-style-type:none">' + tempHTML + '</ul>';
  document.getElementById('favs').innerHTML = "";
  document.getElementById('favs').innerHTML = tempHTML;

  localStorage["favorites"] = JSON.stringify(favList);
}


