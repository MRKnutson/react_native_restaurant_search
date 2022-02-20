import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getRestaurant(id);
  }, []);

  const getRestaurant = async (id) => {
    try {
      setError("");
      let response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    } catch (err) {
      setError("Problem getting restaurant");
    }
  };

  if (!restaurant) {
    return (
      <View>
        {error.length > 0 ? <Text>{error}</Text> : null}
        {error.length < 1 ? <Text>Loading</Text> : null}
      </View>
    );
  } else {
    return (
      <View>
        <Text>{restaurant.name}</Text>
        <FlatList
          data={restaurant.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 100,
  },
});

export default ResultsShowScreen;
