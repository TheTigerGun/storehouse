const {conn}=require('./mysql')

function queryAll(){
     return new Promise((resolve, reject) => {
         // 执行一个查询
         conn.query('select * from user_tel', function (error, results) {
         if (error) reject(error)
         resolve(results)
         })
     })
}

function queryDemand(pageNo,pageSize){
    return new Promise((resolve, reject) => {
        const jsonResult={};
        // 执行一个查询
          conn.query("select t.id,t.username,t.tel,t.create_time,(select count(0) from user_tel where username=t.username) sl,"+
        "(select count(0)+1 from user_tel where create_time<t.create_time and DATE_FORMAT(create_time,'%y-%m-%d')=DATE_FORMAT(t.create_time,'%y-%m-%d')) cs"+
        " from user_tel t order by t.create_time limit ?,? ",[(pageNo-1)*2,pageSize], function (error, results) {
           if (error) reject(error)
           jsonResult.pageNo=pageNo;
           jsonResult.results=results;
           resolve(jsonResult)
        }) 
        /*  conn.query("select t.*,count(0) over (PARTITION BY DATE_FORMAT(t.create_time,'%y-%m-%d') order by create_time) cs "+
        " ,count(0) over (PARTITION BY t.username) sl from user_tel t order by create_time limit ?,? ",[pageNo,pageSize], function (error, results) {
           if (error) reject(error)
           jsonResult.pageNo=pageNo;
           jsonResult.results=results;
           resolve(jsonResult)
        })  */ 

       })
}

function queryCount(){
    return new Promise((resolve,reject)=>{
        conn.query("select count(0) sl from user_tel", function (error, results) {
            if(error) reject(error);
            resolve(results);
         }) 
    })
    
}

function queryById(id){
    return new Promise(function (resolve, reject){
        conn.query('select * from user_tel where id=?',[id], function (error, results, fields) {
            if (error) reject(error);
            resolve(results)
        });
    })
   
}

module.exports={
    queryAll,
    queryById,
    queryDemand,
    queryCount
}