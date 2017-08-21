

     $(".pd_tab .tab li").click(function(){
          var li_num = $(this).index();
           $(this).addClass("active");
           $(this).siblings(".active").removeClass("active");
               
           // $(".panelCotent > div").eq(li_num).addClass("show");
           // $(".panelCotent > div").eq(li_num).siblings(".show").removeClass("show");
           $(".panelCotent > div").eq(li_num).fadeIn().siblings().fadeOut();
     });


