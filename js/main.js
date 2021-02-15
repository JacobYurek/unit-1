/* Stylesheet by Jacob F. Yurek, 2021 */

$('#mydiv').html('Hello World');

$('#mydiv').on('click', function(){
        alert('Madison Rocks! Go Badgers!');
    });
//get the div id
    var theid = $('#mydiv').attr('id');

    //theid is 'mydiv'; add it as text to the div
    $('#mydiv').append(theid);
 //change the text color
    $('#mydiv').css('color', 'blue');

    //change the text size and alignment
    $('#mydiv').css({
        'font-size': '1em',
        'text-align': 'left'
    });

    //get the text color and add it as text to the div
    var thecolor = $('#mydiv').css('color');
    $('#mydiv').append(thecolor);

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
    //calls on the function addColumns defined below with the parameter of the cityPop table
    addColumns(cityPop);
    //calls on the function addEvents defined below
    addEvents();
};

//call the initialize function when the document has loaded
$(document).ready(initialize);

function debugAjax(){
	$.ajax("data/Map.geojson", {
		dataType: "json",
		success: debugCallback
	});
};
function debugCallback(response){
	var mydata = response;
	newFunction(mydata);
};
function newFunction(mydata){
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));	
	
};
$(document).ready(debugAjax);