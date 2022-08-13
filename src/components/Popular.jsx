import axios from "axios";
import React from "react";
import { useEffect } from "react";

export const Popular = () => {
  const getPopular = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=2f97383ad9d247a8ba2b09b1525c3f2a`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    getPopular();
  }, []);
  return <div>Popular</div>;
};
