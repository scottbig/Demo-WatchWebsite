$(function(){


	$("#form_wrap").click(function(){
		// $('#form_wrap').css({"top":"-150px","height":"776px"});
		// $('.form1').css({"height":"530px"});
		$(this).addClass('active upup');
		$('.form1').addClass('active');
		$('#wrap').addClass('upup');
		$(".aboveFooter").show();	
	})


	//交送表單時
	$("#submit1").click(function(e){
		$(".errMsg").hide();
		$(".msg-box4687 img").hide();
		$(".msg-box4687 span").text("信件發送中...");
		$(".msg-box4687").fadeIn(500);
		$("#name-error span").text("");
		$("#mail-error span").text("");
		$("#msg-error span").text("");
		e.preventDefault();
		var data = $("form").serialize();
		$.post("controller/mail.php", data, function(result){
			var results = JSON.parse(result);
			if(results.errorMsg != ""){
				$(".msg-box4687").stop(true,false).fadeOut(500);
				if(results.errorMsg.nameError != ""){
					$("#name-error").show();
					$("#name-error span").text(results.errorMsg.nameError);
				}
				if(results.errorMsg.mailError != ""){
					$("#mail-error").show();
					$("#mail-error span").text(results.errorMsg.mailError);
				}
				if(results.errorMsg.msgError != ""){
					$("#msg-error").show();
					$("#msg-error span").text(results.errorMsg.msgError);
				}
				$('.submit1').css({"z-index":"999","opacity":"1"});
			}else{
				$(".msg-box4687 img").show();
				$(".msg-box4687 span").text(results.success);
				setTimeout(function(){
					$(".msg-box4687").fadeOut(500);
					$("#form_wrap").removeClass("active upup");
					$('.form1').removeClass('active');
				 	$(".aboveFooter").hide();
				 	$('.submit1').css({"z-index":"0","opacity":"0"});
				},2000);
			}
		});
	});

//	$(".aboveFooter, .submit1").click(function(){
//		$("#form_wrap").removeClass("active upup");
//		$('.form1').removeClass('active');
//	 	$(".aboveFooter").hide();
//	 	$('.submit1').css({"z-index":"0","opacity":"0"});
//	})


// $("p").click(function(){
//     alert("The paragraph was clicked.");
// });
// $("#form_wrap").click(function(){
	// $(this).css({"top":"-150px"});
	// $(".form1").css("background-color","red");
// })

// $('#form_wrap').click(function(){
// 	$(this).addClass('active');
// })


// $('#wrap').hover(
// 	function(){
// 		console.log('YA');
// 		$('#wrap').addClass('active');
// 	},
// 	function(){
// 		console.log('shit');
// 		$('#wrap').removeClass('active');
// 	}
// )



	// $('.header').click(function(){
	// 	console.log('qq');
	// })


});
