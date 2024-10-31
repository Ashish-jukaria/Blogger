const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const blogSchema=new Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

    body:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        require:true
    }


})

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    }
    
})

const Blog=mongoose.model('Blog',blogSchema);
const User=mongoose.model('User',userSchema);

module.exports={Blog,User};
