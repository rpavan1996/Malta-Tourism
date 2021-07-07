const fs=require("fs");
const model_placeimages=require("../Models/placeimages");

exports.get_data_cirkewwa = (req,res) => {
    if(req.session.loggedin){
        console.log("samplee");
        model_placeimages.findAll({where:{pageName: "cirkewwa",userId: req.session.email}}).then(comments => {
            //console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.get_data_majjistral = (req,res) => {
    if(req.session.loggedin){
        //console.log("samplee");
        model_placeimages.findAll({where:{pageName: "majjistral",userId: req.session.email}}).then(comments => {
            console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.get_data_buskett = (req,res) => {
    if(req.session.loggedin){
        console.log("samplee");
        model_placeimages.findAll({where:{pageName: "buskett",userId: req.session.email}}).then(comments => {
            //console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.get_data_dingli = (req,res) => {
    if(req.session.loggedin){
        console.log("samplee");
        model_placeimages.findAll({where:{pageName: "dingli",userId: req.session.email}}).then(comments => {
            //console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.get_data_fungus_rock = (req,res) => {
    if(req.session.loggedin){
        //console.log("samplee");
        model_placeimages.findAll({where:{pageName: "fungus_rock",userId: req.session.email}}).then(comments => {
            console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};


exports.get_data_wied_il_ghasri = (req,res) => {
    if(req.session.loggedin){
        //console.log("samplee");
        model_placeimages.findAll({where:{pageName: "wied_il_ghasri",userId: req.session.email}}).then(comments => {
            console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.postImage = (req, res) => {
    try {
        console.log(req.file);
        console.log(req.body.dest);
        const userid=req.session.email;
        console.log(userid);
        if (req.file === undefined) {
            return res.send(`You must select a file.`);
        }
        if (req.body.dest === undefined) {
            console.log("dest: Undefined");
        }


        model_placeimages.create({
            pageName: req.body.dest,
            image_type: req.file.mimetype,
            image: req.file.originalname,
            userId:userid,
            data: fs.readFileSync(
                __basedir + "/views/uploads/" + req.file.filename
            ),
        }).then((model_placeimages) => {
            fs.writeFileSync(
                __basedir + "/views/uploads/" + model_placeimages.name,
                model_placeimages.data
            );
            return res.redirect(('/'+req.body.dest));
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};
