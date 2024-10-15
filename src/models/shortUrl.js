import  mongoose from 'mongoose';

const ShortUrlSchema = new mongoose.Schema({
    longUrl: {
        type:String,
        required: true

    },
    shortCode: {
        type: String,
        required:true
    }
})
export default mongoose.model('shorternUrl', ShortUrlSchema)