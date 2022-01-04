const mongoose = require('mongoose')

const claimSchema = new mongoose.Schema({

    name : {
        type : String,
        default : null

    },
    type : {
        type : String,
        default : null
    },
    date : {
        type : Date,
        default : Date.now
    },
    photos : {
        type : String,
        default : null
    },
    text : {
        type : String,
        default : null
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    laltitude : {
        type : Number,
        default:null
    },
    longitude: {
        type : Number,
        default:null

    }
})

module.exports = mongoose.model("claim", claimSchema);