const express = require("express");
const router = express.Router();
const path=require("path");
const user=require("../Models/user");
const images_model=require("../Models/placeimages");
const auth_controller=require("../controllers/auth");
const place_images_controller=require("../controllers/placeimages");
const place_middleware_file=require("../middleware/upload");
let routes_all = (app) => {

    // Navigation to Login Page
    router.get("/", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        res.sendFile(path.join(__basedir +'/views/login.html'));
        //__dirname : It will resolve to your project folder.);
    });

    //Navigation to Signup Page
    router.get("/signup", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        
        res.sendFile(path.join(__basedir +'/views/signup.html'));
        //__dirname : It will resolve to your project folder.);
    });

    //Navigation to Index page if logged in
    router.get("/index", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/index.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }

        //__dirname : It will resolve to your project folder.);
    });

    //Navigating to cirkewwa page if logged in
    router.get("/cirkewwa", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
                res.sendFile(path.join(__basedir +'/views/cirkewwa.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });

    //Navigating to majjistral page if logged in
    router.get("/majjistral", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/majjistral.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });


    //Navigating to buskett page if logged in
    router.get("/buskett", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/buskett.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });


    //Navigating to dingli page if logged in
    router.get("/dingli", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/dingli.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });



    //Navigating to fungus rock page if logged in
    router.get("/fungus_rock", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/fungus_rock.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });


    //Navigating to fungus rock page if logged in
    router.get("/wied_il_ghasri", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/wied_il_ghasri.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });

    //Navigating to fungus rock page if logged in
    router.get("/logout", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        req.session.destroy();
        res.redirect('/');

        //__dirname : It will resolve to your project folder.);
    });

    router.get("/getdatacirkewwa",place_images_controller.get_data_cirkewwa);
    router.get("/getdatamajjistral",place_images_controller.get_data_majjistral);
    router.get("/getdatabuskett",place_images_controller.get_data_buskett);
    router.get("/getdatadingli",place_images_controller.get_data_dingli);
    router.get("/getdatafungus_rock",place_images_controller.get_data_fungus_rock);
    router.get("/getdatawied_il_ghasri",place_images_controller.get_data_wied_il_ghasri);



    router.post("/auth",auth_controller.postLogin);//Login page authentication controller
    router.post("/signupform",auth_controller.postSignUp); //Signupform data insert
    router.post("/upload",place_middleware_file.single("file"),place_images_controller.postImage);
    return app.use("/", router);
};

module.exports = routes_all;