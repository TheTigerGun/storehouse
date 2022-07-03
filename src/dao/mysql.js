/*相当于导入mysql，可以写在任何地方*/
const mysql = require('mysql'); 
/* 创建一个连接池 */
const conn = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'test',
    timezone: 'GMT%2B8' // 解决时区时间统一的问题
});

/* 执行一个查询 */
/* conn.query('select * from user_tel', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
}); */

/* function queryAll(){
    conn.query('select * from user_tel', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
}

function queryById(id){
    conn.query('select * from user_tel where id=?',[id], function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
} */

module.exports={
    conn,
    //queryAll,
    //queryById
}