$(function(){
	$("body").addClass("inactive");

	$("body").mouseover(function(){
	    $(this).removeClass("inactive");
	});
	$("body").mouseout(function(){
	    $(this).addClass("inactive");
	});
	
});