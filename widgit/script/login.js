//登录函数
function login(){
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
          if(ret.length>0){
              url = "frame2.html?name="+username;
              location.href=url;
              localStorage.setItem("usna",username);
              danwei = ret[0].danwei;
              zhicheng = ret[0].zhicheng;
              localStorage.setItem("danwei",danwei);
              localStorage.setItem("zhicheng",zhicheng);
              //alert("登录成功")
          }
          else{
              alert("用户名或密码错误")
          }
				});
			}
		});
}

function quxiao(){
  url = "frame2.html?name=";
  location.href=url;
}
