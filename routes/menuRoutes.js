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
})



module.exports = router;