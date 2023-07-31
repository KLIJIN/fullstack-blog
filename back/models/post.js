import mongoose from 'mongoose';

const PostShema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    default: [],
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User", // связь между двумя таблицами
    required: true,
  },
  imageUrl: String,
}, {
  timestamps: true,
});

export default mongoose.model("Post", PostShema)