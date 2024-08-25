import mongoose from 'mongoose';


const ObjectId = mongoose.Schema.Types.ObjectId;
const taskSchema = mongoose.Schema({
    name: {type: String, required: true},
    creator: {type: ObjectId, ref: 'User'},
    status: {type: String},
    comments: [{
        comment:{type:String},
        time:{type:String}
    }],
    worklog: [{
        comment:{type:String},
        loggedTime:{type:String},
        time:{type:String}
    }]
})