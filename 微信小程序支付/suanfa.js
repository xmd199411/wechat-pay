var MD5=require('MD5.js')
var nonce_str=function(){
  var base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var nonce_str=''
  for(var i=0;i<32;i++){
    nonce_str += base.substr(parseInt(Math.random()*35), 1)
  }
  return nonce_str.toString(); 
}
var out_trade_no=function(){
  var out_trade_no=''
  var oDate = new Date(); //实例一个时间对象；
  var year=oDate.getFullYear().toString();   //获取系统的年；
  var month = (oDate.getMonth() + 1).toString();   //获取系统月份，由于月份是
  var date = oDate.getDate().toString(); // 获取系统日，
  out_trade_no=year+month+date
  for(var i=0;i<5;i++){
    out_trade_no+=parseInt(Math.random()*9)
  }
  return out_trade_no
}
var sign = function (appid,attach, body, mch_id, nonce_str, notify_url, openid, out_trade_no, spbill_create_ip, total_fee,trade_type,key){
  var str = 'appid=' + appid +"&attach="+attach+ '&body=' + body + '&mch_id=' + mch_id + '&nonce_str=' + nonce_str + '&notify_url='+notify_url+'&openid='+openid+'&out_trade_no='+out_trade_no+"&spbill_create_ip="+spbill_create_ip+'&total_fee='+total_fee+'&trade_type='+trade_type+'&key='+key
  return str
}
module.exports={
  MD5,
  nonce_str,
  sign,
  out_trade_no
}