const express = require('express');
const router = express.Router();
const service=require('../service/userTelService');
const PATH="/demo"

 router.get('/queryById', async (req, res)=> {
    let data= await service.queryById(1)
    res.json(data)
     
})
module.exports=(app)=>{
    app.use(PATH,router)
}