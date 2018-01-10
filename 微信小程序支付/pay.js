
var pay = function (app, suanfa, xml, xml2json, MD5,attach,body,total_fee,that,openid){
  var appid = app.appData.appid
  var attach=attach
  var body = body
  var mch_id = app.appData.mch_id
  var nonce_str = suanfa.nonce_str()
  var notify_url = app.appData.notify_url
  var openid = openid
  var out_trade_no = suanfa.out_trade_no()
  var spbill_create_ip = '192.168.1.1'
  var total_fee = total_fee
  var trade_type = 'JSAPI'
  var key = app.appData.key
  var sign = suanfa.sign(appid,attach, body, mch_id, nonce_str, notify_url, openid, out_trade_no, spbill_create_ip, total_fee, trade_type, key)
  sign = MD5.md5(sign).toUpperCase()
  var formData = xml.xml(appid,attach, body, mch_id, nonce_str, notify_url, openid, out_trade_no, spbill_create_ip, total_fee, trade_type, sign)
  wx.request({
    url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: formData,
    complete: function (res) {
      var xml = res.data
      var obj = JSON.stringify(xml2json(xml), null, 4)
      var json = JSON.parse(obj)
      var nonceStr = json.xml.nonce_str.text
      var pk = json.xml.prepay_id.text
      var signType = 'MD5'
      var timeStamp = Date.parse(new Date()).toString().substr(0, 10);
      
      var paySign = "appId=" + app.appData.appid + "&nonceStr=" + nonceStr + "&package=prepay_id=" + pk + "&signType=MD5&timeStamp=" + timeStamp + "&key=0lWUWzu5RsVi0PtL6FSQx8AAN9bcNAuA"
      paySign = MD5.md5(paySign).toUpperCase()
      wx.requestPayment({
        timeStamp: timeStamp,
        nonceStr: nonceStr,
        package: "prepay_id=" + pk,
        signType: 'MD5',
        paySign: paySign,
        success: function (res) {
          app.appData.prepay_id=pk
          console.log(pk)
          wx.showToast({
            title: '充值成功',
            success:function(){
              var token = app.appData.token
              var param = { 'PKID': app.appData.PKID }
              app.Data(token, param, function (data) {
                console.log(data)
                that.setData({
                  user: data.data
                })
              })
            }
          })
          return true
        },
        fail: function (res) {
          console.log(res)
          return false
        }
      })
    }
  })
}
module.exports={
  pay
}