const { uniqueId } = require('lodash');
const mongoose = require('mongoose');
const bcrypt =require ('bcrypt');
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    }, age: {
        type: Number,

    },
    work: {
        type: String,
        enum: ['chef', 'Waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    }
    ,

    salary: {
        type: Number,
        required: true,
    },
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
});

personSchema.pre('save',async (next)=>{
    const person =this;
    // Agar password update nahi hua ho to hashing skip kar
    if(!person.isModified('password')) return next (); 
    try {
// hash password genration
        const salt =await bcrypt.salt(10);
        
//hash password 
const hashpassword  =await bcrypt.hash(person.password,salt);
//override the plain password with the hashed one  
person.password =hashpassword;
next();

    } catch (err) {
        return next(err);
    }
})


//CREATE  person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person; 