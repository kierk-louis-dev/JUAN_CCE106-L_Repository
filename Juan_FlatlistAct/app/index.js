import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import ProductCard from "../components/ProductCard";
import products from "../data";

export default function DirectoryScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Filter by name in real time, case-insensitive
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePress = (id) => {
    // Pass the id and navigate to the dynamic detail route
    router.push(`/products/${id}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name..."
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handlePress(item.id)} />
        )}
        contentContainerStyle={
          filteredProducts.length === 0 ? styles.emptyContainer : { paddingVertical: 8 }
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No products found.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchBar: {
    margin: 16,
    marginBottom: 4,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 15,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  emptyState: {
    alignItems: "center",
    padding: 24,
  },
  emptyText: {
    fontSize: 15,
    color: "#999",
  },
});
