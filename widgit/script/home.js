function checkLogin(){
  var login = getPro('is_login');
  if(!login){
    //未登录，直接打开登录页
    api.openWin({
      name:'login',
      url:'./html/login1.html'
    });
  }
  return login;
}
apiready = function(){
  api.addEventListener({
      name: 'login_success'
  }, function(ret){
    //登录成功，刷新数据
      refreshDate();
  });
  if(checkLogin()){
    //已登录状态，直接刷新数据
    refreshDate();
  }
}

function refreshDate(){
  //TODO refreshDate
  alert("数据刷新")
};
