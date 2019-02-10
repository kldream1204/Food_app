import mongoose from 'mongoose';

const resSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: "Photo is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    point: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment"
        }
    ]
});

const model = mongoose.model("res", resSchema);

export default model;