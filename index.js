const express = require('express');

const bodyparser = require('body-parser');

const cors = require('cors');

const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'posts',
    port:3306
});

db.connect(err => {
    if(err) {console.log(err,'err');}
    console.log('database connected...');
})

app.get('/users',(req,res) => {

    let q = `select * from users`;

    db.query(q,(err,result) => {
        if(err){
            console.log(err,'errs');
        }

        if(result.length > 0){
            res.send({
                message:'all user data',
                data:result
            });
        }
    });
});

app.get('/users/:id',(req,res) => {

    let gID = req.params.id;

    let qr = `select * from users where id = ${gID}`;

    db.query(qr,(err,result)=> {
        if(err){console.log(err);}

        if(result.length > 0){
            res.send({
                message:'get single data',
                data:result
            })
        }
        else {
            res.send({
                message:'data not found'
            });
        }
    })
});



app.post('/users',(req,res) => {

    console.log(req.body,'createdata');

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let qr = `insert into users(name,email,password) values('${name}','${email}','${password}')`;
    console.log(qr,'qr');

    db.query(qr,(err,result) => {

        if(err){console.log(err);}
        console.log(result,'result')
        res.send({
            message:'data inserted',
        });
    })
});

app.put('/users/:id',(req,res) => {

    console.log(req.body,'updatedata');

    let gID = req.params.id;

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let qr = `update users set name = '${name}', email = '${email}', password = '${password}' where id = ${gID}`;

    db.query(qr,(err,result) => {

        if(err) {console.log(err);}

        res.send({
            message:'data updated'
        });
    });
})

app.delete('/users/:id',(req,res) => {

    let bID = req.params.id;

    let qr = `delete from users where id = '${bID}'`;
    db.query(qr,(err,result) => {
        if(err) {console.log(err);}

        res.send({
            message:'data deleted'
        })
    });

});

app.listen(3000,() => {
    console.log('server running...');
})