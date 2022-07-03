const express = require('express');
const app = express();
const routerInit=require('./router/index')

//获取所有路由
routerInit(app)

const path = require('path')

app.use('/static', express.static(path.join(__dirname, '../static')))
 
const server = app.listen(8081, function () {
 
    const host = server.address().address
    const port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})