//application.js version 1.0
$(document).ready(function(){	

	$( "#player" ).focus();

	var rand = Math.floor(Math.random()*100);
	var guess = null;
								//-/Console Logs for Dev 
								//-/console.log('rand = ', rand);
								//-/console.log('guess = ', guess);

	$('#player').keypress(function (e) {
	  if (e.which == 13) {
	      //Convert to Int
	      temp = parseInt($("input").val());
	    if ((temp >0 ) && (temp <101)){
	      // temp in range and assigned to global var.
	      guess = temp;
	      result();
	      var tempMsg = $("#msg").text();
	      console.log(tempMsg);
	      $('#log').prepend("<li>" + guess + " " + tempMsg + "</li>");
	      clearInput();
	   } else {
	   	$("#msg").text("Invalid: 1-100 ");
	   	clearInput();
	   }
	  }
	});

	function clearInput(){ $("#player").val("");}
	
	function result(){
		var distance = Math.abs(rand - guess);
		//var trend (last guess - this guess );  Q4-WILLIS howto keepold var.     
		//-/console.log('distance = ', distance);
		if (distance == 0) {$("#msg").text("Well Done!");}
		else if ((distance >= 50) && (distance <= 80)) {$("#msg").text("Frozen!");}
		else if ((distance >= 31) && (distance <= 49)) {$("#msg").text("Very Cold");}
		else if ((distance >= 17) && (distance <= 30)) {$("#msg").text("Cold");}
		else if ((distance >=  8) && (distance <= 16)) {$("#msg").text("Warm");}
		else if ((distance >=  4) && (distance <=  7)) {$("#msg").text("Hot");}
		else if ((distance >=  1) && (distance <=  3)) {$("#msg").text("Very Hot");}
		else if (distance >80) {$("#msg").text("Artic");}	
	};
								//-/console.log(guess);

});