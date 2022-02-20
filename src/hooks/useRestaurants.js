import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchAPI("pasta");
  }, []);

  const searchAPI = async (searchTerm) => {
    try {
      setErrorMessage("");
      console.log("API called");
      let response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san jose",
          term: searchTerm,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return [searchAPI, results, errorMessage];
};
