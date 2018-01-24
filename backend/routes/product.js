const ex= require("express");
const pro = require("../models/product.js");
const uid = require("uuid/v4");
const root = ex.Router();


root.post("/add",(req,res)=>{
    if (!req.files.profile) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.profile;
    let imageName = uid() + ".png"
    image.mv("./public/profile/" + imageName, (error) =>{
        if(error) return res.status(500).send(error);

        let newpro = new pro({
            Name:req.body.name,
            price:req.body.price,
            Kategori:req.body.Kategori,
            image:"http://localhost:3000/profile/"+imageName
        })

        newpro.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else{
                res.json(newpro);
            }
        });

    })

})
root.get("/list",(req,res)=>{
    pro.find({},(error,x)=>{
        if(error)res.status(500).send(error);
        else res.json(x);
    })
})
root.get("/cate",(req,res)=>{
    pro.find({},(mai,moi)=>{
        if(mai)res.status(500).send(mai);
        else{
            array = []
            array.push(moi[0].Kategori)
            for(i=1;i<moi.length;i++){
                for(j=0;j<array.length;j++){
                    if(moi[i].Kategori.toLowerCase()!==array[j].toLowerCase()&&j==array.length-1){
                        array.push(moi[i].Kategori)
                    }
                }
            }
        }
        res.send(array)
    })
})
root.get("/list/:id",(req,res)=>{
 
    mo = req.params.id.split("get")
    console.log(mo)
    if(mo[0]=="kategori"){
        pro.find({Kategori:mo[1]},(mai,moi)=>{
            if(mai)res.status(500).send(mai);
            else res.json(moi);
        })
    }else if(mo[0]=="id"){
        pro.findById(mo[0],(mai,moi)=>{
            if(mai)res.status(500).send(mai);
            else res.json(moi);
        })
    }
})


module.exports = (function(){
    return root;
})()