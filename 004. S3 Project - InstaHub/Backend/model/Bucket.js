import mongoose from "mongoose";

const BucketSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  postURL: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Bucket", BucketSchema);
