import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  propmt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
