import express from "express";
import { deletePostFunction, getAllPostsFunction, newPostFunction } from "../controllers/postController.js";
import { multerUpload } from "../config/multer.js";

const router = express.Router();                                                                     

router.route("/post/new").post(multerUpload, newPostFunction);
router.route("/posts/all").get(getAllPostsFunction);
router.route("/post/delete/:id").delete(deletePostFunction)

export default router;
