const express = require('express');
const router = express.Router();
const Person = require('../models/Person');




router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetching');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });

    }
});
router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;

        if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
            const response = await Person.find({ work: worktype });
            console.log("response fatch");
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'invalid work type' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server mistake' });
    }
});






router.put('/:id',async(req,res)=>{
try{
const personId =req.params.id;
const upadatePersonData=req.body;
const response =await Person.findByIdAndUpdate(personId,upadatePersonData,{
    new:true,
    runValidators:true,
});
if(!response){
    return res.status(404).json({error:'Person not found'})
}
console.log("data updated");
res.status(200).json(response);

}catch(err){
    console.log(err);
    res.status(500).json({ error: 'internal server mistake' });

}
});
router.delete('/:id',async(req,res)=>{
try {
    const pid =req.params.id;
    const deletepid = await Person.findByIdAndDelete(id);
    if (!deletepid){
      return res.status(404).json({error: "this is invalid id"});
    }
    console.log('data delete succesful');
    res.status(202).json({message:'person was delete'});
 
} catch (err) {
console.log(err);
res.status(500).json({error:"internal server error"});
}})
 

module.exports = router;