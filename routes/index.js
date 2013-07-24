
/*
 * GET home page.
 */

module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index', { title: '主页' });
    });
    app.get('/login',function(req,res){
        res.render('login',{title:'登陆'});
    });
    app.post('/login',function(req,res){

    })
    app.get('/reg',function(req,res){
       res.render('reg',{title:'注册'});
    });
    app.post('/reg',function(req,res){
        res.render('reg',{title:'注册'});
    })
    app.get('/url',function(req,res){
        res.send('hello.world!');
    });

};