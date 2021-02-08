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
//function to add a new column to the cityPop table
function addColumns(cityPop){
    //each method to loop through the table with a function
    $('tr').each(function(i){
    	//first if else statement for when number of loops is 0
    	if (i == 0){
    		//append to create a column header of city size
    		$(this).append('<th>City Size</th>');
    	//else for when the loop is greater than 1
    	} else {
    		//creates a variable citySize
    		var citySize;
    		//second if else statement that compares the cityPop value to 1000000 and sets its citySize value to small if lesser
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		//else if statement that compares the cityPop value to 5000000 and sets its citySize value to medium if lesser
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		//else statement that compares the cityPop value to 5000000 and sets its citySize value to medium if lesser
    		} else {
    			citySize = 'Large';
    		};
    		//add the citySize value to the table
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};
//function to add color mouseover function
function addEvents(){
	//creates a mouseover function for when cursor is over the table 
	$('table').mouseover(function(){
		//sets variable color to be string
		var color = "rgb(";
		//for loop 
		for (var i=0; i<3; i++){
			//creates random number and multiplies it by 255 then assigns it to a variable random
			var random = Math.round(Math.random() * 255);
			//addition assignment statement to add the variable random to the variable color
			color += random;
			//if else statement to determine location in the for loop
			if (i<2){
				//addition assignment statement to string to color variable
				color += ",";
			//else statement for the end of the for loop
			} else {
				//addition assignment statement to string to color variable
				color += ")";
		};
		//alters the css color to include the color variable we created in function
		$(this).css('color', color);
	};
});
	//creates a function for on page clicks
	function clickme(){
		//method that will create an alert box to display string
		alert('Hey, you clicked me!');
	};
	//uses on method to create and event listener with the event in this case being a mouse click on table
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);