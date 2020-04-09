var mongoose = require('mongoose')

var courseSchema = new mongoose.Schema({
    name:String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    }
    
})

module.exports = mongoose.model("Author",courseSchema)
