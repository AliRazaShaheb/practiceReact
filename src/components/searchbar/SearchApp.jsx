import axios from "axios";
import { useEffect, useState } from "react";

const SearchApp = () => {
  const [fruitData, setFruitData] = useState([]);
  const [fruitApiData, setFruitApiData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setFruitData(res.data);
      setFruitApiData(res.data);
    });
  }, []);

  const handleChange = (e) => {
    if (e.target.value.trim() === "") {
      return setFruitData(fruitApiData);
    }
    const filteredData = fruitData.filter((each) => {
      return (
        each.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    console.log(filteredData);
    setFruitData(filteredData);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
      {fruitData.map((each) => (
        <p key={each.title}>{each.title}</p>
      ))}
    </div>
  );
};

export default SearchApp;
