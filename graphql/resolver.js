const mongoose = require('mongoose');

const PostModel = require('../model/post')
let Post = mongoose.model('Post', PostModel);

module.exports = {
    getPost: ({id}) => {
        const data = Post.findById(id)
        console.log(data);
        
        return data;
        // try {
        //     Post.findById(id).then(post => {
        //         console.log(post);
                
        //         if(post){
        //             return {data : post}
        //         }else{
        //             return { error: { status: 400, message: "invalid id",} }
        //         }
        //     }).catch(err => {
        //         return { error: { status: 400, message: "invalid id",} }
        //     });
        // } catch (err) {
        //     return { error: { status: 500, message: "Internal Server Error",} }
        // }
    },


    getAllPosts: () => {
        try {
            return Post.find();
        } catch (err) {
            return { error: { status: 500, message: "Internal Server Error",} }
        }
    },


    createPost: ({input}) => {
        try {
            return Post.create(input);
        } catch (err) {
            return { error: { status: 500, message: "Internal Server Error",} }
        }
    },

    updatePost: ({id, input}) => {
        try {
            return Post.findByIdAndUpdate(id,input,{new: true})
        } catch (err) {
            return { error: { status: 500, message: "Internal Server Error",} }
        }
    },

    deletePost: ({id}) => {
        try {
            return Post.findByIdAndDelete(id);
        } catch (err) {
            return { error: { status: 500, message: "Internal Server Error",} }
        }
    }
};