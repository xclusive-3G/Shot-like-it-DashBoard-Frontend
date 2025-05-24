import mongoose from "mongoose";

const detailSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    categories:{
        type:[String],
        required: true,
    },
    image:{
        type:String,
        required: true,
    }
})

const detailsModel = mongoose.model("details",detailSchema)

export default detailsModel