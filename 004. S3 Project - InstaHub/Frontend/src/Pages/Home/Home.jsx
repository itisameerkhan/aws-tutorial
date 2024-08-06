import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:8080/api/posts/all");
    setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="home">
      <h1>home</h1>
      <div className="home-posts">
        {data.map((post) => (
          <Card key={post._id} data={post} getData={getData} />
        ))}
      </div>
    </div>
  );
};

export default Home;
