import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} stars, {restaurant.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default RestaurantDetail;
