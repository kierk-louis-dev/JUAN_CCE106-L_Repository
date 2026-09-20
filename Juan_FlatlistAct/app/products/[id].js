import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import products from "../../data";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  // Find the product that matches the id passed from the directory screen
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Product not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.id}>ID: {product.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 16,
    backgroundColor: "#eee",
    marginTop: 24,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
  },
  category: {
    fontSize: 16,
    color: "#777",
    marginTop: 6,
  },
  id: {
    fontSize: 13,
    color: "#aaa",
    marginTop: 16,
  },
  notFound: {
    fontSize: 16,
    color: "#999",
    marginTop: 40,
  },
});
