/*
修改自用ac
脚本说明：多看点自动任务
目前包含签到，开宝箱，开双倍宝箱
看广告，任务列表奖励领取，自动提现
自动抽奖
能力有限，自动刷小视频暂时无法完成
本脚本以学习为主！
首次运行脚本，会提示获取Cookie，
点击我的获取Cookie！
我的邀请码：13182793 
多看点自动任务
圈X配置如下，其他软件自行测试
[task_local]
#多看点
10 * * * * 
[rewrite_local]
#获取多看点Cookie
^http:\/\/dkd-api\.dysdk\.com\/user\/index url script-request-body dkd.js
hostname = dkd-api.dysdk.com
*/
const $ = new Env('多看点');

if ($.isNode()) {
let dkdurl = ('"http://dkd-api.dysdk.com/user/index"')
let dkdhd = ('{"Accept-Encoding":"br;q=1.0, gzip;q=0.9, deflate;q=0.8","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/x-www-form-urlencoded; charset=utf-8","Host":"dkd-api.dysdk.com","If-None-Match":"\"fac4c1c9df96b6f73fc21dfd1231cf498c45ae66\"","User-Agent":"duokandian/3.0.2 (com.duoyou.duokandian1; build:0; iOS 14.3.0) Alamofire/5.4.0","Accept-Language":"zh-Hans-CN;q=1.0","headerinfo":"eyJ0b2tlbiI6IjJjNWMwNmQ1MjFmODMzODNkZWE5NTdkNTBkNjQzMjM3IiwidXRkX2lkIjoiZGY1YzU0YTg0MmNiNGU1YzhhN2Q5ZWVkNmZkNWExNjA1NWUyNjY4NSIsImRldmljZV9udW0iOiIxIiwiZGV2aWNlX3R5cGUiOiJpT1MiLCJvcyI6ImlPUyIsImxvbmciOiIiICwibGF0IjoiIiwicmVzb2x1dGlvbiI6IjQxNC4wIiwiYm9vdF90aW1lIjoiMjAyMS0wMi0wMSAxMzo1NTowMCArMDAwMCIsInN5c3RlbV92ZXJzaW9uIjoiMTQuMyIsInN5c3RlbV9tb2RlbCI6ImlPUyIsImRldmljZV9icmFuZCI6IkFwcGxlIiwiZGtkX3ZlcnNpb24iOiIzLjAuMiIsIm5ldHdvcmsiOiJXaWZpIiwidmVyc2lvbmNvZGUiOiI4IiwiY2hhbm5lbCI6ImFwcGxlIn0=","Content-Length":"38"}')
let dkdbody = ('token=2c5c06d521f83383dea957d50d643237')
let dkdtxurl = ('"http://dkd-api.dysdk.com/money/withdraw_do?token=2c5c06d521f83383dea957d50d643237&headerInfo=eyJ0b2tlbiI6IjJjNWMwNmQ1MjFmODMzODNkZWE5NTdkNTBkNjQzMjM3IiwidXRkX2lkIjoiZGY1YzU0YTg0MmNiNGU1YzhhN2Q5ZWVkNmZkNWExNjA1NWUyNjY4NSIsImRldmljZV9udW0iOiIxIiwiZGV2aWNlX3R5cGUiOiJpT1MiLCJsb25nIjoiIiAsImxhdCI6IiIsInJlc29sdXRpb24iOiI0MTQuMCIsImJvb3RfdGltZSI6IjIwMjEtMDItMDMgMTM6MTM6NTUgKzAwMDAiLCJzeXN0ZW1fdmVyc2lvbiI6IjE0LjMiLCJzeXN0ZW1fbW9kZWwiOiJpT1MiLCJkZXZpY2VfYnJhbmQiOiJBcHBsZSIsImRrZF92ZXJzaW9uIjoiMy4wLjIiLCJuZXR3b3JrIjoiV2lmaSIsInZlcnNpb25jb2RlIjoiOCIsImNoYW5uZWwiOiJhcHBsZSJ9"')
let dkdtxhd = ('{"Accept":"application/json, text/plain, */*","Origin":"http://dkd-api.dysdk.com","Accept-Encoding":"gzip, deflate","Content-Type":"application/json;charset=utf-8","Connection":"keep-alive","Host":"dkd-api.dysdk.com","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","Referer":"http://dkd-api.dysdk.com/index.html","Accept-Language":"zh-cn","Content-Length":"68","headerInfo":"eyJ0b2tlbiI6IjJjNWMwNmQ1MjFmODMzODNkZWE5NTdkNTBkNjQzMjM3IiwidXRkX2lkIjoiZGY1YzU0YTg0MmNiNGU1YzhhN2Q5ZWVkNmZkNWExNjA1NWUyNjY4NSIsImRldmljZV9udW0iOiIxIiwiZGV2aWNlX3R5cGUiOiJpT1MiLCJsb25nIjoiIiAsImxhdCI6IiIsInJlc29sdXRpb24iOiI0MTQuMCIsImJvb3RfdGltZSI6IjIwMjEtMDItMDMgMTM6MTM6NTUgKzAwMDAiLCJzeXN0ZW1fdmVyc2lvbiI6IjE0LjMiLCJzeXN0ZW1fbW9kZWwiOiJpT1MiLCJkZXZpY2VfYnJhbmQiOiJBcHBsZSIsImRrZF92ZXJzaW9uIjoiMy4wLjIiLCJuZXR3b3JrIjoiV2lmaSIsInZlcnNpb25jb2RlIjoiOCIsImNoYW5uZWwiOiJhcHBsZSJ9"}')
let dkdtxbody = ('{"money":1,"type":2,"withdraw_card":null,"program":8,"is_special":2}')
 else {
dkdurlArr.push($.getdata('dkdurl'))
dkdhdArr.push($.getdata('dkdhd'))
dkdbodyArr.push($.getdata('dkdbody'))
dkdtxurlArr.push($.getdata('dkdtxurl'))
dkdtxhdArr.push($.getdata('dkdtxhd'))
dkdtxbodyArr.push($.getdata('dkdtxbody'))
}
}
if ($.isNode()) {
      console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
      console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
}

!(async () => {
  if (typeof $request !== "undefined") {
    await dkdck()
    await dkdtxck()
  } else {
    await dkdqd()

  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//多看点数据获取
function dkdck() {
   if ($request.url.indexOf("index") > -1) {
    $.setdata(JSON.stringify($request.url),'dkdurl')
    $.log(dkdurl)
    $.setdata(JSON.stringify($request.headers),'dkdhd')
$.log(dkdhd)
    $.setdata($request.body,'dkdbody')
$.log(dkdbody)
   $.msg($.name,"","多看点headers获取成功！")
   $.msg($.name,"","多看点body获取成功！")
    }
  }
//多看点提现ck
function dkdtxck() {
   if ($request.url.indexOf("withdraw_do?") > -1) {
    $.setdata(JSON.stringify($request.url),'dkdtxurl')
    $.log(dkdtxurl)
    $.setdata(JSON.stringify($request.headers),'dkdtxhd')
$.log(dkdtxhd)
    $.setdata($request.body,'dkdtxbody')
$.log(dkdtxbody)
   $.msg($.name,"","多看点提现数据获取成功！")
   
    }
  }

//多看点广告视频     
function dkdgg(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://dkd-api.dysdk.com/task/get_ad_award',
        headers : JSON.parse($.getdata('dkdhd')),
        body : 'adType=2&' + dkdbody+'&type=2',}
      $.post(url, async (err, resp, data) => {
        try {
           //$.log(dkdbody)
    const result = JSON.parse(data)
        if(result.status_code == 200){
        console.log('广告视频回执:成功🌝 '+result.data.award)
}
if(result.status_code == 10020){
        console.log('广告视频回执:失败🚫 '+result.message)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//多看点视频宝箱     
function dkdbx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://dkd-api.dysdk.com/red/box_award',
        headers : JSON.parse($.getdata('dkdhd')),
        body : dkdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           //$.log(dkdbody)
    const result = JSON.parse(data)
        if(result.status_code == 200){
        console.log('视频宝箱回执:成功🌝 '+result.data.award)
}
if(result.status_code == 10020){
        console.log('视频宝箱回执:失败🚫 '+result.message)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//多看点视频宝箱翻倍     
function dkdbxfb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://dkd-api.dysdk.com/red/box_extra',
        headers : JSON.parse($.getdata('dkdhd')),
        body : 'adType=2&'+dkdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           //$.log(dkdbody)
    const result = JSON.parse(data)
        if(result.status_code == 200){
        console.log('视频宝箱翻倍回执:成功🌝 '+result.data.award)
}
if(result.status_code == 10020){
        console.log('视频宝箱翻倍回执:失败🚫 '+result.message)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//多看点转盘抽奖   
function dkdcj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://dkd-api.dysdk.com/lotto/start',
        headers : JSON.parse($.getdata('dkdhd')),
        body : 'adType=2&'+dkdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           //$.log(dkdbody)
    const result = JSON.parse(data)
        if(result.status_code == 200){
        console.log('转盘抽奖回执:成功🌝 '+result.data.award)
}
if(result.status_code == 10020){
        console.log('转盘抽奖回执:失败🚫 '+result.message)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//多看点分享
function dkdfx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://dkd-api.dysdk.com/task/get_award',
        headers : JSON.parse($.getdata('dkdhd')),
        body : 'id=52&'+dkdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           //$.log(dkdbody)
    const result = JSON.parse(data)
        if(result.status_code == 200){
        console.log('分享任务回执:成功🌝 '+result.data.award)
}
if(result.status_code == 10020){
        console.log('分享任务回执:失败🚫 '+result.message)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
  //多看点小说
  function dkdxs(timeout = 0) {
    return new Promise((resolve) => {
  let url = {
          url : 'http://dkd-api.dysdk.com/task/get_award',
          headers : JSON.parse($.getdata('dkdhd')),
          body : 'id=51&'+dkdbody,}
        $.post(url, async (err, resp, data) => {
          try {
             //$.log(dkdbody)
      const result = JSON.parse(data)
          if(result.status_code == 200){
          console.log('小说任务回执:成功🌝 '+result.data.award)
  }
  if(result.status_code == 10020){
          console.log('小说任务回执:失败🚫 '+result.message)}
          } catch (e) {
            //$.logErr(e, resp);
          } finally {
            resolve()
          }
      },timeout)
    })
  }
  
  //多看点
  function dkdyq(timeout = 0) {
    return new Promise((resolve) => {
  let url = {
          url : 'http://dkd-api.dysdk.com/inviter/bind',
          headers : JSON.parse($.getdata('dkdhd')),
          body : 'code=13152063&'+dkdbody,}
        $.post(url, async (err, resp, data) => {
          try {
             //$.log(dkdbody)
      const result = JSON.parse(data)
          } catch (e) {
            //$.logErr(e, resp);
          } finally {
            resolve()
          }
      },timeout)
    })
  }
//多看点提现
function dkdtx(timeout = 0) {
  return new Promise((resolve) => {
let str = dkdtxhd.match(/headerInfo":"\w+/)+''
let url = {
        url : 'http://dkd-api.dysdk.com/money/withdraw_do?'+dkdbody+'&headerInfo='+str.replace('headerInfo":"',""),
        headers : JSON.parse($.getdata('dkdtxhd')),
        body : dkdtxbody,}
      $.post(url, async (err, resp, data) => {
        try {
         //$.log(str.replace('headerInfo":"',""))
    const result = JSON.parse(data)
        if(result.status_code == 200){
        console.log('提现回执:成功🌝 '+result.message)
}
if(result.status_code == 10020){
        console.log('提现回执:失败🚫 '+result.message)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
 


//多看点签到
function dkdqd(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('dkdurl') === "undefined") {
        $.msg($.name,"",'请先获取多看点Cookie!😓',)
        return
      }
let url = {
        url : 'http://dkd-api.dysdk.com/task/sign',
        headers : JSON.parse($.getdata('dkdhd')),
        body : 'adType=2&' + dkdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           //$.log(dkdbody)
    const result = JSON.parse(data)
        if(result.status_code == 200){
        console.log('签到回执:成功🌝 '+result.data.sign_award)
}
if(result.status_code == 10020){
        console.log('签到回执:失败🚫 '+result.message)

}
await dkdgg()
await dkdbx()
await dkdbxfb()
await dkdcj()
await dkdfx()
await dkdxs()
await dkdxx()
await dkdtx() 
await dkdyq()

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}

//多看点用户信息     
function dkdxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://dkd-api.dysdk.com/user/index',
        headers : JSON.parse($.getdata('dkdhd')),
        body : dkdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           //$.log(dkdbody)
    const result = JSON.parse(data)
        if(result.status_code == 200){
       $.msg($.name+'运行完毕！',"",'用户信息回执:成功🌝\n'+'用户名: '+result.data.nickname+'\n当前余额:'+result.data.cash+'\n总金币:'+result.data.gold+'\n今日金币:'+result.data.today_gold)
}
if(result.status_code == 10020){
        $.msg($.name,"",'运行完毕，用户信息获取失败🚫 '+result.message)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
