需要在app.js中先配置好:appid,mch_id,notify_url,key,openid
app.js中的数据格式：
                    App({
                        appData:{
                            openid:...,
                            appid:...,
                            mch_id:...,
                            notify_url:...,
                            key:...,
                            openid:...
                        }
                    })
之后在小程序需要调取支付的页面中引入
var xml=require('../../../utils/xml.js')
var xml2json=require('../../../utils/xml2json.js')
var MD5=require('../../../utils/MD5.js')
var suanfa=require('../../../utils/suanfa.js')
var pay=require('../../../utils/pay.js')

之后调取支付：pay.pay(app, suanfa, xml, xml2json, MD5, JSON.stringify({ 'StudentID': app.appData.PKID, 'Integration': select.num, 'Type': '1' }), '积分充值', '1',that,app.appData.openid)

JSON.stringify({ 'StudentID': app.appData.PKID, 'Integration': select.num, 'Type': '1' })这一段可以根据后台要求进行修改修改

'1':金额0.01元