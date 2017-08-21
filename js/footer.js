$(function(){

	$(".panel .tab li").click(function(){
		var li_num = $(this).index();
		
		if($(".panel .tab li .english").eq(li_num).hasClass("active")){
			$(".footer").removeClass("showFooter");
			$(".panel .tab li .english").removeClass("active");
			$(".aboveFooter").hide();
		}else{
			
			$(".footer").addClass("showFooter");
			$(".panel .tab li .english").eq(li_num).addClass("active");
			$(".panel .tab li .english").eq(li_num).parent().siblings().children(".active").removeClass("active");			
			$(".tabContent > div").eq(li_num).fadeIn().siblings().fadeOut();
			$(".aboveFooter").show();
		
		}
	})

	$(".aboveFooter").click(function(){

		$(".footer").removeClass("showFooter");
	 	$(".panel .tab li .english").removeClass("active");
	 	$(".aboveFooter").hide();

	})

})