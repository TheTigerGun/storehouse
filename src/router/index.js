const demoRouter=require('./demoRouter')
const userTelRouter=require('./userTelRouter')

module.exports=(app)=>{
    demoRouter(app),
    userTelRouter(app)
}