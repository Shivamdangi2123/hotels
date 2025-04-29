const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log("menu data save");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" })
    }
});
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();


        console.log('MENUdata fetch');
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error " })
    }
});

router.get('/:menucheck',async(req,res)=>{
 const menucheck =req.params.menucheck;
 try{
 if(menucheck=='sweet'||menucheck=='spicy'||menucheck=='sour'){
    const response = await MenuItem.find({teste:menucheck});
    console.log('menu item checked');
    res.status(200).json(response);
 }else(
    res.status(404).json({error:'invalid work type'})
 )}catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'})
 }
});
router.put('/:id',async(res,req)=>{
    try {
 const mid = req.params.id;
 const data =req.body;
 const response = await MenuItem.findByIdAndUpdate(mid,data,{
    new:true,
    runvalidators:true
 }) ;
 if(!response){
    return res.status(404).json({error:"internal error"});
 }
 
 console.log('menu data update');
 res.status(202).json(response)
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"internal server error"})
        
    }
})

router.delete('/:id',async(req,res)=>{
    const mid = req.params.id;
  
   try {
    const response = await MenuItem.findByIdAndDelete(mid);
    if (!response){
        return res.status(404).json({error:"inveled menu "});
    }
    console.log("deleted");
    res.status(202).json({message:"delete a menu item"});
   } catch (err) {
    console.log(err);
    res.status(500).json({error:"internal server error"})
   }
})

module.exports = router;