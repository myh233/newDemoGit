//登录函数
function login(){
  jump();
  var model = api.require('model');
  model.config({
    appKey: '74C42CC5-1778-E823-BCD7-B12A156D2696',
		appId: 'A6038101288292',
    host: 'https://d.apicloud.com'
  });
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
  model.({
    userId:value1,
    password:value2
  },function(ret,err){
    if(ret){
       alert( JSON.stringify( ret ) );
    }else{
       alert( JSON.stringify( err ) );
    }
  });
}


//数据库测试
/*
apiready = function(){
  //配置config
  var model = api.require('model');
  model.config({
      appKey: '74C42CC5-1778-E823-BCD7-B12A156D2696',
      host: 'https://d.apicloud.com'
  });
  //数据插入
  model.insert({
    class: 'list',
    value: {
         name : '梅宇航',
         age : 30
    }
  }, function(ret, err){
    if( ret ){
         alert( JSON.stringify( ret ) );
    }else{
         alert( JSON.stringify( err ) );
    }
  });
}*/
//数据查询

apiready = function(){
  //配置config
  var model = api.require('model');
  var query = api.require('query');  //查询对象
  model.config({
      appKey: '74C42CC5-1778-E823-BCD7-B12A156D2696',
      appId: 'A6038101288292',
      host: 'https://d.apicloud.com'
  });
  query.createQuery({
  },function(ret,err){
    if(ret&&ret.qid){
      model.findAll({
          class: "list",
          qid: ret.qid
      }, function( ret, err ) {
          alert(ret[0].name)
      });
    }
  }
  )
}
