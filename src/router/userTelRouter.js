const express = require('express');
const router = express.Router();
const service=require('../service/userTelService');
const PATH="/userTel"

router.get('/queryAll', function (req, res) {
     service.queryAll().then((data)=>{
     res.json(data)
     })
})

router.get('/queryDemand', function (req, res) {
    let pageNo=Number(req.query.pageNo)
    service.queryDemand(pageNo,2).then(data =>{
        service.queryCount().then(result=>{
            data.totalPage=Math.ceil(result[0].sl/2)
            res.json(data)
        })
    })
})

 module.exports=(app)=>{
    app.use(PATH,router)
}