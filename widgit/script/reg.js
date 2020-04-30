//注册函数
function reg(){
	password = document.getElementById("password").value;
	rpassword = document.getElementById("rpassword").value;
	if(password == rpassword){
		var model = api.require("model");
		model.config({
			appKey: '74C42CC5-1778-E823-BCD7-B12A156D2696',
			appId: 'A6038101288292',
	    host: 'https://d.apicloud.com'
		});
	  var username=document.getElementById('username').value;
	  var password=document.getElementById('password').value;
	  model.insert({
	    class:'App_user',
	    value:{
	      username:username,
	      password:password
	    }
	  },function(ret,err){
			if(ret){
				 alert("注册成功");
				 url = "login.html?name=";
			   location.href=url;
	       //alert( JSON.stringify( ret ) );
			}
	    else{
				 alert("出错了");
	       //alert( JSON.stringify( err ) );
			}
	  });
	}
	else{
		alert("两次输入的密码不同");
	}
}

function quxiao(){
  url = "frame2.html?name=";
  location.href=url;
}
