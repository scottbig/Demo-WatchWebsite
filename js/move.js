$(function(){
  $('#Container').mixItUp();

  $('.sub-bt0').click(function(){
        $('.c2_all').addClass("cookie_show");
        $('.c2_all').siblings(".cookie_show").removeClass("cookie_show");                   
    })
  $('.sub-bt1').click(function(){
		var cat = $(this).attr("data-filter").replace(".","");
        $('.c3_'+cat).addClass("cookie_show");
        $('.c3_'+cat).siblings(".cookie_show").removeClass("cookie_show");                   
    })
  
  $('.f1').click(function(){
		var color = $(this).children("span").text();
        $('.c3_'+color).addClass("cookie_show");
        $('.c3_'+color).siblings(".cookie_show").removeClass("cookie_show"); 
        $(this).addClass("border");
        $(this).siblings(".border").removeClass("border");                  
    })
  $('.sub-bt0').click(function(){        
        $('.filter').removeClass("border");
        $('.rc1').addClass("current_page_item_two");
        $('.rc1').siblings(".current_page_item_two").removeClass("current_page_item_two");  
    })
  $('.rc').click(function(){        
        $('.filter').removeClass("border");                  
    })

  $('.jq1').click(function(){        
        $('.rc1').addClass("current_page_item_two");
        $('.rc1').siblings(".current_page_item_two").removeClass("current_page_item_two");  
    })


  /**
    modo -> auto, ok, x
*/
function abreAviso(texto, modo, cor){ 
    modo = ((modo === undefined) || (modo === ''))? 'ok': modo;
    cor = ((cor === undefined) || (cor === ''))? 'ok': cor;
    
    $("#popFundo").fadeIn();
    $("#avisoTexto").html(texto);
    $("#aviso").addClass("avisoEntrada");
    

}
function fechaAviso(){
    
    $("#aviso").removeClass("avisoEntrada").addClass("avisoSaida");
    
    setTimeout(function(){
        $("#aviso").removeClass("avisoSaida");
        $("#avisoTexto").html('');
        $("#popFundo").fadeOut("fast");
    },500);
}


$(".buy_btn").on("click", function(){
    abreAviso('<div class="alert2">商品已加入購物車</div>');
    $('.bg_black1').fadeIn();

});
$("#fechaAviso").on("click", function(){
    fechaAviso();
    $('.bg_black1').fadeOut();
    location.reload();
});


});