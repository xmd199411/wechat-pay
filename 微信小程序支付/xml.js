function xml(appid,attach,body,mch_id,nonce_str,notify_url,openid,out_trade_no,spbill_create_ip,total_fee,trade_type,sign){
  var formData = "<xml>"
  formData += "<appid>"+appid+"</appid>"
  formData +="<attach>"+attach+"</attach>"
  formData += "<body>"+body+"</body>"
  formData += "<mch_id>"+mch_id+"</mch_id>"
  formData += "<nonce_str>"+nonce_str+"</nonce_str>"
  formData += "<notify_url>"+notify_url+"</notify_url>"
  formData += "<openid>"+openid+"</openid>"
  formData += "<out_trade_no>"+out_trade_no+"</out_trade_no>"
  formData += "<spbill_create_ip>"+spbill_create_ip+"</spbill_create_ip>"
  formData += "<total_fee>"+total_fee+"</total_fee>"
  formData += "<trade_type>"+trade_type+"</trade_type>"
  formData += "<sign>"+sign+"</sign>"
  formData += "</xml>" 
  return formData
}
module.exports={
  xml
}