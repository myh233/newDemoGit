//注册函数
function reg(){
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
			 alert("注册成功")
       //alert( JSON.stringify( ret ) );
    }else{
			 alert("出错了")
       //alert( JSON.stringify( err ) );
    }
  });
}
