function ocr(){
  var baiduAd = api.require('baiduIdentifyOCR');
  baiduAd.init(function(ret,err){
      alert(JSON.stringify(ret));
  });
}
