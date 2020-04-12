//避免用户使用物理back键关闭登录页面
apiready = function(){
  api.addEventListener({
      name: 'keyback'
  }, function(ret, err){
      api.closeWidget();
    });
};

//登录成功，存储登录状态，并发出成功事件，关闭登录窗口，回到主页。
function loginSuccess(ret){
  if(ret.status){
    setPro('is_login',true);
    api.sendEvent({
      name:'login_success'
    });
    api.closeWin({
      animation:{
        type:'fade',
        duration:250
      }
    });
  }
}
