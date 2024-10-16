const {Router} = require('express');
const homeRouter = Router();

homeRouter.get('/',(req,res)=>{
    res.render('index');
});

module.exports = homeRouter;