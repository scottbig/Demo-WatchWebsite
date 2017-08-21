$(function(){
	var newSrc = ""
	$(".pic_sm .pic_list img").click(function(){
		newSrc= $(this).attr('src');
		$(".zoom img").attr("src" , newSrc);
		$(".pic_sm .piclist_pic img").attr("src" , newSrc);
	});
	

	//add to cart
	$("#add-to-cart").click(function(e){
		e.preventDefault();
		var data = $("#cartForm").serialize();
		$.post("controller/addToCart.php", data, function(result){
			if($(".no-product").length>0){
				$(".no-product").parent().remove();
			}
			if($(".goToPay").length == 0){
				$(".bagContent").append('<a href="step1.php" class="goToPay"><span class="pay-en">PAY</span><span class="pay-ch">前往結帳</span></a>');
			}
			results = JSON.parse(result);
			var pNameArr = results.product[0].proName.split("-");
			var itemPrice = parseInt(results.product[0].proPrice.replace(",","")) * parseInt(results.cart[0].cartAmount);
//			alert(results.product[0].proPrice);
			$(".bagProducts table tbody").append('<tr class="bagSingleProduct">'
					+'<td class="bagPic"><img src="images/products/display/'+results.product[0].proDisplayImage+'"></td>'
					+'<td class="bagName">'
					+'<div class="name1">'+pNameArr[0].trim()+'<br><p class="name2">'+pNameArr[1].trim()+'</p></div>'
					+'</td>'
					+'<td class="bagAmount">數量：'+results.cart[0].cartAmount+'</td>'
					+'<td class="bagPrice">NT$ '+addCommas(itemPrice)+'</td>'
					+'<td class="bagDelete">'
					+'<input type="hidden" value="'+results.cart[0].cartNo+'">'
					+'<a href="javascript:">'
					+'<i class="fa fa-times"></i>'
					+'</a>'
					+'</td>'
					+'</tr>');
			var totalPrice = 0;
			for(var i=0; i<$(".bagSingleProduct .bagPrice").length; i++){
				totalPrice += parseInt($(".bagSingleProduct .bagPrice").eq(i).text().replace("NT$ ","").replace(",",""));
			}
			$("#totalInt").text(addCommas(totalPrice));
			$(".bagCount").not(".forAni").text($(".bagSingleProduct .bagPrice").length).addClass("bagCount2");
			$("#total_qn").text($(".bagSingleProduct .bagPrice").length);
			$(".forAni").eq(0).addClass("forAnimate1");
			setTimeout(function(){
				$(".forAni").eq(1).addClass("forAnimate2");
				setTimeout(function(){
					$(".forAni").eq(1).removeClass("forAnimate2");
				},500);
			},100);
			setTimeout(function(){
				$(".forAni").eq(0).removeClass("forAnimate1");
			},500)
		});
	});
});

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}





