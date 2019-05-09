$(function(){
	
	$(".head .headnav li").click(function(){
		var that = $(this).index();
		$(this).addClass("current-menu").siblings().removeClass("current-menu")
		$(".leftmenu div").eq(that).addClass("leftmenu-item").siblings().removeClass("leftmenu-item")
	})
	
	
	
	$("li#link_0 a").html("你好,"+localStorage.getItem("userName"));
		$("#link_1").click(function(){
				if($(".leftmenu").is(":visible")){
					$(".leftmenu").hide();
					$("#link_1 a").html("显示菜单")
					$(".rightmain").css("marginLeft","-180px")
				}else{
					$(".leftmenu").show();
					$("#link_1 a ").html("隐藏菜单")
					$(".rightmain").css("marginLeft","0px")
				}
	})
		
		$(".leftmenu dl dt").click(function(){
			$("this").css("background","url('../img/ico_small.png') right -40px no-repeat")
			$(this).next().toggle();	
		})
		
		$(".leftmenu dl dd ul li a").click(function(){
			
			var $_link =$(this).attr("_link");
			$("#main").attr("src",$_link);
			$(this).addClass("current-menu").siblings().removeClass("current-menu")
			$(".leftmenu div").eq(that).addClass("leftmenu-item").siblings().removeClass("leftmenu-item")
		})
})
