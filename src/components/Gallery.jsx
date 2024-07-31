import { useState } from "react";
import axios from "./utils/axios";
import "./Gallery.css";
import Loader from "../Loader";

function Gallery() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/image");
      // Handle successful response here
      console.log(response.data);

      setData(response.data);
    } catch (error) {
      // Handle error here (e.g., show error message to user)
      console.error("Error fetching images:", error);
    }
  };
  return (
    <div className="gallery_main">
      <button onClick={getData}>Click me for getting data</button>

      <div className="gallery_container"></div>
      {data.length > 0 ? data.map((item) => {
        return (
          <div key={item.id}>
            <img
              src={item.download_url}
              alt={item.author}
              className="gallery-image"
            />
            <p>{item.author} </p>
          </div>
        );
    }):<Loader/>}
    </div>
  );
}
export default Gallery;
