import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = async () => {
  const [data, setData] = useState([]);
  async function render() {
    const url = "https://www.omdbapi.com/?apikey=2e1f6500&s=mid90s";
    const { response } = axios.get(url);
    setData(response);
  }

  useEffect(() => {
    render();
  }, []);
};

export default Data;
