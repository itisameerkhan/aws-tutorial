import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuid4 } from "uuid";
import s3 from "../config/s3.js";
import Bucket from "../model/Bucket.js";

export const newPostFunction = async (req, res, next) => {
  try {
    const imageName = uuid4();

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: imageName,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };

    const command = new PutObjectCommand(params);
    const response = await s3.send(command);

    const publicURL = `https://ameerkhan-bucket-nodejs.s3.us-east-2.amazonaws.com/${imageName}`;

    await Bucket.create({
      fullName: req.body.fullName,
      caption: req.body.caption,
      postURL: publicURL,
      imageName: imageName,
    });

    
    res.json({
      success: true,
      message: "Data created succcessfully",
      data: req.body,
      file: req.file,
      publicURL: publicURL,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllPostsFunction = async (req, res, next) => {
  try {
    const response = await Bucket.find().sort({ createAt: -1 });
    res.json({
      success: true,
      message: "data fetched successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const deletePostFunction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Bucket.findById(id);

    const params = {
      Bucket: "ameerkhan-bucket-nodejs",
      Key: post.imageName,
    };
    const command = new DeleteObjectCommand(params);
    s3.send(command);

    await Bucket.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Post deleted successfully",
    });
    
  } catch (error) {
    next(error);
  }
};
