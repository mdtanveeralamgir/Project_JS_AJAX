window.onload = function(){

	//function for search
	$('#search').keyup(function(){			

		var searchField = $('#search').val();	
		var myExp = new RegExp(searchField, "i");	

		$.getJSON('js/data.json', function(data){

var output = '<ul class = "searchresult">';

$.each(data, function(key, val){
	if((val.name.search(myExp)) != -1 || (val.ingredient.search(myExp) != -1)){	
		output += '<li>';
		output += '<h2>' + val.name + '</h2>';
		if (val.shortname != "") {
			output += '<img src="images/' + val.shortname + '.jpg" alt="'+ val.name + '"/>';
		}
		else {
			output += '<img src="images/' + "default" + '.gif" alt="'+ val.name + '"/>';
		}
		output += '<p>' + val.ingredient + '</p>';
		output += '<span>' + val.price+'</span>';
		output += '<span>' + "$" +'</span>';
		output += '</li>';
	}

});

output += '</ul';

$('#update').html(output);

});//get JSON

	});
	
	$(document).ready(function(){
		var totalPrice = 0;
		var tax = 0;
		var afterTax = 0;
		$('#update').on('click', 'li', function () {
			var name = $(this).find("h2").eq(0).text();
			var price = parseFloat($(this).find("span").eq(0).text());
       
       totalPrice += price;

       items = '<p>' + name + '</p>' + '<span>' + price + '</span>' + "<br>";
       $('#items').append(items);
       tax = totalPrice * 0.0997;
       tax = parseFloat(tax.toFixed(2));
       afterTax = totalPrice + tax;
       afterTax = parseFloat(afterTax.toFixed(2));
       $('#tax').html('<p>' + "Tax" + '</p>' + '<span>' + tax + '</span>' + '<br>');
       $('#total').html('<p>' + "Total"+ '</p>' + '<span>' + afterTax + '</span>' + '<br>');
       $('#clean').html('<span>' + "Clear" + '</span>');
       tax = 0;

   });

    //search veg
    $('#quickSearch').on('click', '#veg', function () {
    	$.getJSON('js/data.json', function(data){
    		var output = '<ul class = "searchresult">';

    		$.each(data, function(key, val){
		if(val.type == "veg"){	//using search method and passing the regular expresion which is myEx. -1 means it did find the 
			output += '<li>';
			output += '<h2>' + val.name + '</h2>';
			if (val.shortname != "") {
				output += '<img src="images/' + val.shortname + '.jpg" alt="'+ val.name + '"/>';
			} else {
				output += '<img src="images/' + "default" + '.gif" alt="'+ val.name + '"/>';
			}
			output += '<p>' + val.ingredient + '</p>';
			output += '<span>' + val.price+'</span>';
			output += '<span>' + "$" +'</span>';
			output += '</li>';
		}

	});

    		output += '</ul';

    		$('#update').html(output);

});


    });//search veg

    //search non veg
    $('#quickSearch').on('click', '#nonVeg', function () {
    	$.getJSON('js/data.json', function(data){
    		var output = '<ul class = "searchresult">';

    		$.each(data, function(key, val){
    			if(val.type == "nonveg"){	
    				output += '<li>';
    				output += '<h2>' + val.name + '</h2>';
    				if (val.shortname != "") {
    					output += '<img src="images/' + val.shortname + '.jpg" alt="'+ val.name + '"/>';
    				} else {
    					output += '<img src="images/' + "default" + '.gif" alt="'+ val.name + '"/>';
    				}
    				output += '<p>' + val.ingredient + '</p>';
    				output += '<span>' + val.price+'</span>';
    				output += '<span>' + "$" +'</span>';
    				output += '</li>';
    			}

    		});

    		output += '</ul';

    		$('#update').html(output);

});


    }); //search non veg


    //search halal
    $('#quickSearch').on('click', '#halal', function () {
    	$.getJSON('js/data.json', function(data){

var output = '<ul class = "searchresult">';

$.each(data, function(key, val){
	if(val.for == "halal"){	
		output += '<li>';
		output += '<h2>' + val.name + '</h2>';
		if (val.shortname != "") {
			output += '<img src="images/' + val.shortname + '.jpg" alt="'+ val.name + '"/>';
		} else {
			output += '<img src="images/' + "default" + '.gif" alt="'+ val.name + '"/>';
		}
		output += '<p>' + val.ingredient + '</p>';
		output += '<span>' + val.price+'</span>';
		output += '<span>' + "$" +'</span>';
		output += '</li>';
	}

});

output += '</ul';

$('#update').html(output);

});


    });//search halal

    //clear button
    $('#cart').on('click', '#clean', function (){

    	$('#items').html("");
    	$('#tax').html("");
    	$('#total').html("");
    	$('#clean').html("");

    });

});
}