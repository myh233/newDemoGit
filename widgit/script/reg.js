//注册函数
/*function reg(){
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
}*/

//注册函数二
function reg(){
	var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
	/*var username = api.byId('username');
	var password = api.byId('password');
	var vusername = api.val(username);
	var vpassword = api.val(password);*/
	api.ajax({
		url:'https://d.apicloud.com/mcm/api/user',
		method:'post',
		headers:{
			"X-APICloud-AppId":"A6038101288292",
			"X-APICloud-AppKey":"74C42CC5-1778-E823-BCD7-B12A156D2696"
		},
		data:{
			values:{
				username:username,
				password:password
			}},
			function(ret,err){
				if(ret && ret.id){
					alert("注册成功!");
				}else{
					alert("注册失败!");
				}
			}
	});
}
