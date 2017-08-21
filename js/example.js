// DOM Ready
$(function() {
	
	var $el, leftPos, newWidth;
	
	
	//發生點擊事件後
	
    $("#example-one li a").click(function(){
        
		if ($(this).hasClass("sub")){
			$("#submenu").slideToggle();
		}else{
			$("#submenu").slideUp();
		}
		
        $(this).addClass("current_page_item");
        $(this).siblings(".current_page_item").removeClass("current_page_item"); 
		
		
    });
	
	
	
	//副選單
	var $mainNav2 = $("#example-two");

	var $magicLineTwo = $("#magic-line-two");
	
	
	$("#example-two li").click(function(){
		/*
			EXAMPLE TWO
		*/
		$(this).addClass("current_page_item_two");
		$(this).siblings(".current_page_item_two").removeClass("current_page_item_two"); 
	});
	
	
	
});