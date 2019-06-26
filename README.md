# nullwu-vue-message


## 介绍

vue消息提示插件

## 使用


```javascript
npm install -S nullwu-vue-message
import Message    from 'nullwu-vue-message'
Vue.use(Message)
 this.$message({
        type: "success",
        text: "操作成功!"
 });
```

## 参数详解
```javascript
message:' 操作成功',    //提示信息
time:'3000',           //显示时间（默认：3s）
type:'success',        //显示类型，包括4种：success.error,info,warning
showClose:false,       //显示关闭按钮（默认：否）
autoClose:true,        //是否自动关闭（默认：是）
```

## 下载
- 下载地址 https://github.com/nullwu/nullwu-vue-message/releases
- cdn https://unpkg.com/nullwu-vue-message/dist/index.js
