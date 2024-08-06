import "./Card.scss";
import axios from "axios";

const Card = (props) => {
  const { fullName, caption, postURL, _id } = props.data;

  const handleDelete = async () => {
    await axios.delete(`http://localhost:8080/api/post/delete/${_id}`);
    props.getData();
  };

  return (
    <div className="card">
      <h1>{fullName}</h1>
      <p>{caption}</p>
      <img src={postURL} alt="img" />
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default Card;
