import axios from "axios";
import { API_key } from "./yelpHeader";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: API_key,
  },
});
