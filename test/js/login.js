$(function(){
	 //表单验证
        var yan = {
            user : function(user){//帐号
                var user_tag = (/^[a-zA-Z0-9]\d{3,14}$/.test(user));
                return user_tag;
            },
            pass : function(pass){//密码
                var pw_tag = (/^[a-zA-Z0-9]{6,12}$/.test(pass));
                return pw_tag;
            }
//          yzm : function(yzm){
//          	var yzm_tag = (/^/)
//          }
        }
  //	存储到local storage
	   
	//验证账号
		$("ul li #user").blur(function(){
//			alert("sss")
		var thisValue = $(this).val(); 
  		if(thisValue == ""){
  			$("ul li .alert").html("请输入账号");
  		}else if(yan.user(thisValue) == false){
  			$("ul li .alert").html("您的账号格式不正确，请您重新输入");
  		}else{
  			$("ul li .alert").html("");
  		}
	})

	//验证密码
	$("ul li #pass").blur(function(){
		var thisValue = $(this).val();  
		if(thisValue == ""){
  			$("ul li .alert").html("请输入密码");
  		}else if(yan.pass(thisValue) == false){
  			$("ul li .alert").html("您的密码格式不正确，请您重新输入");
  		}else{
  			$("ul li .alert").html("");
  		}
	})
	$("ul li .deng").click(function(){   
		var user = $("ul li #user").val();
		var pass = $("ul li #pass").val();
		if(yan.user(user) == true && yan.pass(pass) == true ){
		$("ul li .alert").html("登陆成功，请稍后");
	}
		localStorage.setItem("userName",$("ul li #user").val());
		window.location.href = "index.html";
		
	})
	
})
