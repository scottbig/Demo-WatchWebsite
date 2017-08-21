$(function(){
	//登入
	$("#login-btn").click(function(e){
		$("#signInError span").text("");
		e.preventDefault();
		var data = $("#myform2").serialize();
		$.post("controller/login.php", data, function(result){
			var results = JSON.parse(result);
			if(results.errMsg != ""){
				$("#signInError").show();
				$("#signInError span").text(results.errMsg);
			}else{
				$("#signInError").hide();
				$(".msg-box4687 span").text(results.success);
				$(".msg-box4687").fadeIn(500,function(){
					setTimeout(function(){
						$(".msg-box4687").fadeOut(500,function(){
							location.reload();
						});
					},700);
				});
			}
		});
	});
	
	//登出
	$(".logout span").click(function(){
		$.get("controller/logout.php","",function(result){
			$(".msg-box4687 span").text(result);
			$(".msg-box4687").fadeIn(500,function(){
				setTimeout(function(){
					$(".msg-box4687").fadeOut(500,function(){
						location.reload();
					});
				},700);
			});
		});
	});
	
	//註冊時日期選單
	$("#mBday,#mBdayEdit").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: "yy-mm-dd",
		showAnim: "slide",
		yearRange: "1910:c+0",
		autoSize: true
	});
	
	//修改
	$("#edit_btn").click(function(e){
		$(".input_error").hide();
		$("#nameEditError span").text("");
		$("#pwdOldEditError span").text("");
		$("#pwdEditError span").text("");
		$("#pwd2EditError span").text("");
		$("#bdayEditError span").text("");
		$("#phoneEditError span").text("");
		e.preventDefault();
		var data = $("#myform_edit").serialize();
		$.post("controller/edit.php", data, function(result){
			var results = JSON.parse(result);
			if(results.errMsg != ""){
				$("#nameEditError span").text(results.errMsg.nameError);
				$("#pwdOldEditError span").text(results.errMsg.pwdOldError);
				$("#pwdEditError span").text(results.errMsg.pwdError);
				$("#pwd2EditError span").text(results.errMsg.pwd2Error);
				$("#bdayError span").text(results.errMsg.bdayError);
				$("#bdayEditError span").text(results.errMsg.phoneError);
				for(var i=0; i<$(".input_error").length; i++){
					if($(".input_error").eq(i).children("span").text() != ""){
						$(".input_error").eq(i).show();
					}
				}
			}else{
				$(".msg-box4687 span").text(results.success);
				$(".msg-box4687").fadeIn(500,function(){
					setTimeout(function(){
						$(".msg-box4687").fadeOut(500,function(){
							location.reload();
						});
					},700);
				});
			}
		});
	});
	
	//註冊
	$("#register_btn").click(function(e){
		$(".input_error").hide();
		$("#nameError span").text("");
		$("#emailError span").text("");
		$("#pwdError span").text("");
		$("#pwd2Error span").text("");
		$("#bdayError span").text("");
		$("#phoneError span").text("");
		e.preventDefault();
		var data = $("#myform1").serialize();
		$.post("controller/register.php", data, function(result){
			var results = JSON.parse(result);
			if(results.errMsg != ""){
				$("#nameError span").text(results.errMsg.nameError);
				$("#emailError span").text(results.errMsg.emailError);
				$("#pwdError span").text(results.errMsg.pwdError);
				$("#pwd2Error span").text(results.errMsg.pwd2Error);
				$("#bdayError span").text(results.errMsg.bdayError);
				$("#phoneError span").text(results.errMsg.phoneError);
				for(var i=0; i<$(".input_error").length; i++){
					if($(".input_error").eq(i).children("span").text() != ""){
						$(".input_error").eq(i).show();
					}
				}
			}else{
				$(".msg-box4687 span").text(results.success);
				$(".msg-box4687").fadeIn(500,function(){
					setTimeout(function(){
						$(".msg-box4687").fadeOut(500,function(){
							var data2 = {"memEmail":results.info.newMail,"memPwd":results.info.newPwd}
							$.post("controller/login.php", data2, function(result){
								location.reload();
							});
						});
					},700);
				});
			}
		});
	});
});