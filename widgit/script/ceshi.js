/*function reg(){
  api.showProgress();
  var model = api.require("model");
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = api.require('user');
  user.register({
    username:username,
    password:password,
  },function(ret,err){
    api.hideProgress();
    if(ret){
      alert('注册成功');
    }
    else{
      alert("注册失败");
      //api.toast({msg:err.message,location:"middle"})
    }
  });
}*/
function login(){
    jump();
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
		var model = api.require('model');
		var query = api.require('query');
		model.config({
			appId : 'A6038101288292',
			appKey : '74C42CC5-1778-E823-BCD7-B12A156D2696',
			host : 'https://d.apicloud.com'
		});
		query.createQuery(function(ret, err) {
			if (ret && ret.qid) {
				//console.log(ret.qid);
				query.whereEqual({
					qid : ret.qid,
					column : 'username',
					value : username
				});
				query.whereEqual({
					qid : ret.qid,
					column : 'password',
					value : password
				});
				model.findAll({
					class : 'App_user',
					qid : ret.qid
				},function(ret, err) {
					//coding...
          //alert(console.log(typeof(ret)))
          if(ret){
            //js = JSON.stringify(ret);
            //获取json格式里面的数据
            //var obj = eval(js);
            //if(username == obj[0].username && password == obj[0].password){
              alert("登录失败")
            //}
            //else{
              //alert("或密码错误")
            //}
          }
          else{
            alert("用户名或密码错误")
          }
				});
			}
		});
}
