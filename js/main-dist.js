$("#mydiv").html("Hello World"),$("#mydiv").on("click",(function(){alert("Madison Rocks! Go Badgers!")}));var theid=$("#mydiv").attr("id");$("#mydiv").append(theid),$("#mydiv").css("color","blue"),$("#mydiv").css({"font-size":"1em","text-align":"left"});var thecolor=$("#mydiv").css("color");function initialize(){cities()}function cities(){var t=[{city:"Madison",population:233209},{city:"Milwaukee",population:594833},{city:"Green Bay",population:104057},{city:"Superior",population:27244}];$("#mydiv").append("<table>"),$("table").append("<tr>"),$("tr").append("<th>City</th><th>Population</th>");for(var o=0;o<t.length;o++){var e="<tr><td>"+t[o].city+"</td><td>"+t[o].population+"</td></tr>";$("table").append(e)}}function jsAjax(){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&callback(t.response)},t.open("GET","data/map.geojson",!0),t.responseType="json",t.send()}function callback(t){console.log(t)}$("#mydiv").append(thecolor),window.onload=jsAjax();