const User = require("../Models/user");
const flash=require("connect-flash");
exports.postSignUp = (req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    if(username !== "" && email !== "" && password !== ""){
        User.findOne({where:{email:email}}).then((user) => {
            if(user){
                console.log("user not valid");
                res.redirect('/signup');
            }else{
                User.create({
                    username: username,
                    password: password,
                    email:email,
                    login:false
                }).then(() => {
                    res.redirect('/');
                }).catch((err) => {
                    console.log(err.message);
                    res.redirect('/signup');
                })
            }
        })
    }else{
        res.redirect('/signup');
    }

};

exports.postLogin = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    if(email !== "" && password !== ""){
        User.findOne({where:{login:true}}).then(user => {
            if(user){
                user.update({login:false},{where:{login:true}});
                return user.save();
            }
            return
        }).then(() => {
            User.findOne({where:{email:email,password:password}}).then((user) => {
                if(user){
                    user.update({login:true});
                    user.save();
                    req.session.loggedin = true;
                    req.session.email = user.email;
                    res.redirect('/index');

                }else{
                    req.session.loggedin = false;
                    console.log("Incorrect Details");
                    res.redirect('/');
                }
            })
        })

    }else{
        res.status(500).json({
            message: "failed"
        });
    }

};
