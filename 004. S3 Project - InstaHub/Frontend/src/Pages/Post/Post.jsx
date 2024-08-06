import { useState } from "react";
import "./Post.scss";
import axios from "axios";
import { LinearProgress, Snackbar } from "@mui/material";

const Post = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({ fullName: "", caption: "" });
  const [loading, setLoading] = useState(false);
  const [snackStatus, setSnackStatus] = useState({
    open: false,
    message: "",
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      formData.append("fullName", data.fullName);
      formData.append("caption", data.caption);

      const response = await axios.post(
        "http://localhost:8080/api/post/new",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setLoading(false);
      setSnackStatus({
        open: true,
        message: "Data Added successfully",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSnackStatus({
        open: true,
        message: "Something went wrong!",
      });
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSnackClose = () => {
    setSnackStatus({
      open: false,
      message: "",
    });
  };

  return (
    <div className="post-outer">
      {loading && <LinearProgress />}
      <div className="post-main">
        <h1>ADD NEW POST</h1>
        <form action="POST" onSubmit={(e) => e.preventDefault()}>
          <div className="form-1">
            <label htmlFor="file-input">
              <span className="material-symbols-outlined">upload</span>
              {file === null ? "ADD NEW IMAGE" : file.name}
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              id="file-input"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div>
            <label>FULL NAME</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="fullName"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CAPTION</label>
            <input
              type="text"
              placeholder="caption"
              name="caption"
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </form>
      </div>
      <Snackbar
        open={snackStatus.open}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        message={snackStatus.message}
      />
    </div>
  );
};

export default Post;
