import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RestaurantsList from "../components/RestaurantsList";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useRestaurants();

  const filterResultsByPrice = (price) => {
    let restaurants = results.filter((result) => {
      return result.price == price;
    });
    return restaurants;
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage.length > 0 ? (
        <Text style={{ color: "red" }}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        <RestaurantsList
          title='Cost Effective'
          restaurants={filterResultsByPrice("$")}
        />
        <RestaurantsList
          title='Bit Pricier'
          restaurants={filterResultsByPrice("$$")}
        />
        <RestaurantsList
          title='Big Spender'
          restaurants={filterResultsByPrice("$$$")}
        />
        <RestaurantsList
          title='More money than I have'
          restaurants={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
