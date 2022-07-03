const dao=require('../dao/userTelDao')

function queryAll(){
    return dao.queryAll()
}

function queryById(id){
    return dao.queryById(id)
}

function queryDemand(pageNo,pageSize){
    return dao.queryDemand(pageNo,pageSize)
}

function queryCount(){
    return dao.queryCount()
}

module.exports={
    queryAll,
    queryById,
    queryDemand,
    queryCount
}