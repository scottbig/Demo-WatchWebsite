$(function(){
	$(".account .up").hide();

	$(".bag").click(function(){
		$(".bagContent").fadeToggle(200);
		$(".accountContent").fadeOut(200);
		$.get("controller/ifOpenBag.php","");
	})

	$(".account").click(function(){
		$(".accountContent").fadeToggle(200);
		$(".account .up").toggle();
	 	$(".account .down").toggle();
	 	if($(".bagContent").css("display").indexOf("block")!=-1){
			$(".bagContent").fadeOut(200,function(){
				$.get("controller/ifOpenBag.php","");
			});
	 	}
	})


	//delete from cart
	$(document).on("click",".bagDelete",function(){
		var curItem = $(this);
		var data = {"cartNo":curItem.children("input").val()};
		$.post("controller/deleteFromCart.php", data, function(result){
			location.reload();
		});
	});

	//delete on paying page
	$(".prodDelete").click(function(){
		var curItem = $(this);
		var data = {"cartNo":curItem.children("input").val()};
		$.post("controller/deleteFromCart.php", data, function(result){
			location.reload();
		});
	});
	
	//go to pay
	$(document).on("click",".goToPay","click",function(e){
		if(!ifLogin){
			e.preventDefault();
			$("#singinbox-1").prop("checked",true);
		}
	});

})