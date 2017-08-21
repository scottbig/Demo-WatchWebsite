$(function(){

	//-------- Slider --------

	var li_index = 0;
	var slider_width = $(".slider").width();
	var li_count = $(".slider .sliderPic li").length;

	//console.log(slider_width);

	for (var i = 1; i <= li_count; i++ ) {
		$(".slider .controller").append("<li></li>");
	}

	$(".slider .controller li:first").addClass("active");

	$(".slider .sliderPic").css({width:li_count * slider_width})

	$(".slider .sliderPic li").css({width:slider_width})
	
	$('<img/>').attr('src', 'img/img_top01.jpg').load(function() {
		$(this).remove(); 
		$(".frame_container").css({
			"width":slider_width,
			"height":$(".slider .sliderPic").height()
		});
	});
	
	$(".slider .controller li").click(function(){
		if(li_index != $(this).index()){
			li_index = $(this).index();
			//改以淡入淡出
			$(".slider .controller li").eq(li_index % 4).addClass("active").siblings().removeClass("active");
			$(".slider .sliderPic").stop(true,true).fadeOut(500,function(){
				$(this).css("left",slider_width * li_index * -1);
				$(this).stop(true,true).fadeIn(500);
				changePicInArrow(li_index);
			});
		}
	});
	
	


	//-------- 計時器 --------
	var tt = setInterval(pp, 3500);
	var whichPic = 1;

	function pp(){
		if (li_index < li_count - 1){
			li_index ++;	
		} else {
			//當children數量達到9時開始進行刪除
			if(li_count>8){
				for(var i=0; i<5; i++){
					$(".slider .sliderPic li").eq(4).remove();
				}
				li_index = 1;
				li_count = 4;
				$(".slider .sliderPic").css("left",0 + "px");
				whichPic = 1;
			}else{
				li_count ++;
				//寫入新的li以便能夠繼續向左邊滑
				switch(whichPic){
					case 1:
						$(".slider .sliderPic").append('<li><img src="images01/banner'+whichPic+'.jpg" data-lg="images/bbig'+whichPic+'.jpg" alt=""></li>');
						break;
					case 2:
						$(".slider .sliderPic").append('<li><img src="images01/banner'+whichPic+'.jpg" data-lg="images/bbig'+whichPic+'.jpg" alt=""></li>');
						break;
					case 3:
						$(".slider .sliderPic").append('<li><img src="images01/banner'+whichPic+'.jpg" data-lg="images/bbig'+whichPic+'.jpg" alt=""></li>');
						break;
					case 4:
						$(".slider .sliderPic").append('<li><img src="images01/banner'+whichPic+'.jpg" data-lg="images/bbig'+whichPic+'.jpg" alt=""></li>');
						break;
				}
				$(".slider .sliderPic").css({width:li_count * slider_width});
				$(".slider .sliderPic li").css({width:slider_width});
				li_index ++;
				//決定新的li的圖片用哪張
				if(whichPic < 4){
					whichPic ++;
				} else{
					whichPic = 1;
				}
			}
		}
		
		aniPlay(li_index, slider_width);
	}
	
	$(".prev").click(function(e){
		var current;
		e.preventDefault();
		clearInterval(tt);
		if(li_index % 4 == 0){
			current = 3;
		}else{
			current = li_index - 1;
		}
		$(".slider .controller li").eq(current % 4).addClass("active").siblings().removeClass("active");
		$(".slider .sliderPic").stop(true, true).animate({left: slider_width * current * -1}, 2000, function(){
			li_index = current;
			clearInterval(tt);
			tt = setInterval(pp, 3500);
			changePicInArrow(li_index);
		});
	});

	$(".next").click(function(e){
		var current;
		e.preventDefault();
		clearInterval(tt);
		if(li_index % 4 == 3){
			current = 0;
		}else{
			current = li_index + 1;
		}
		$(".slider .controller li").eq(current % 4).addClass("active").siblings().removeClass("active");
		if(li_index > 3){
			//寫入新的li以便能夠繼續向左邊滑
			li_count++;
			switch(whichPic){
				case 1:
					$(".slider .sliderPic").append('<li><img src="images01/banner'+whichPic+'.jpg" data-lg="images/bbig'+whichPic+'.jpg" alt=""></li>');
					break;
				case 2:
					$(".slider .sliderPic").append('<li><img src="images01/banner'+whichPic+'.jpg" data-lg="images/bbig'+whichPic+'.jpg" alt=""></li>');
					break;
				case 3:
					$(".slider .sliderPic").append('<li><img src="images01/banner'+whichPic+'.jpg" data-lg="images/bbig'+whichPic+'.jpg" alt=""></li>');
					break;
				case 4:
					$(".slider .sliderPic").append('<li><img src="images01/banner'+whichPic+'.jpg" data-lg="images/bbig'+whichPic+'.jpg" alt=""></li>');
					break;
			}
			$(".slider .sliderPic").css({width:li_count * slider_width});
			$(".slider .sliderPic li").css({width:slider_width});
			if(whichPic < 4){
				whichPic ++;
			} else{
				whichPic = 1;
			}
		}
		$(".slider .sliderPic").stop(true, true).animate({left: slider_width * current * -1}, 2000, function(){
			li_index = current;
			clearInterval(tt);
			tt = setInterval(pp, 3500);
			changePicInArrow(li_index);
		});
	});
	
	//當滑鼠 hover 大圖或點點時，計時器停止
	$(".slider .sliderPic, .slider .controller li, .prev div, .next div, .prev, .next").hover(
		function(){
			clearInterval(tt);
		}, 
		function(){
			clearInterval(tt);
			tt = setInterval(pp, 3500);
		}
	);

	function aniPlay(li_index, slider_width){
		$(".slider .controller li").eq(li_index % 4).addClass("active").siblings().removeClass("active");
		$(".slider .sliderPic").stop(true, false).animate({left: slider_width * li_index * -1}, 2000, function(){
			changePicInArrow(li_index);
		});
	}
	
	function changePicInArrow(li_index){
		var whichPicPrev;
		var whichPicNext;
		if(li_index % 4 == 3){
			whichPicNext = 1;
		}else{
			whichPicNext = li_index % 4 +2;
		}
		if(li_index % 4 == 0){
			whichPicPrev = 4
		}else{
			whichPicPrev = li_index % 4;
		}
		$(".prev div img").attr("src","images01/banner"+whichPicPrev+".jpg");
		$(".next div img").attr("src","images01/banner"+whichPicNext+".jpg");
		
		$(".prev").show();
	}

	// ------- Lightbox --------

	var newSrc = "";
	var imgAlt = "";
	
	$("body").append("<div class='blackBg'></div>");
	$("body").append('<div class="lightbox"> <div class="bannerpic"> <img src="" alt=""> </div> <div class="description"></div> <a href="javascript:" class="close">Close</a> </div>');

	

	$(".close, .blackBg").click(function(){
		$(".lightbox, .blackBg").fadeOut();
	})



	// ------- 商品分類圖 --------

	// var openSrc = "";
	// $(".cate img").hover(function(){
	// 	$(this).fadeOut();
	// 	$(this).fadeIN();
	// 	// openSrc = $(this).attr("data-op");
	// })

	// $('.cate').hover(function(){
	// 	function() {
	// 	 	$('.cate img').fadeOut();
	// 	 	// openSrc = $(this).attr("data-op");
	// 	 	// $(this).attr("src", openSrc);	
	// 	}, function() {
 //    		$('.cate img').fadeIn();
 // 		}
	// })






})