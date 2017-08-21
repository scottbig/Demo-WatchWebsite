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


//$("#submit1").on("click", function(){
//    abreAviso('<p class="alert1">Thank You!</p><div class="alert2">謝謝您寶貴的意見!我們會盡快回復您</div>');
//});
$("#fechaAviso").on("click", function(){
    fechaAviso();
});