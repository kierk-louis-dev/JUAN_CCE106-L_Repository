import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  const [coffeeCount, setCoffeeCount] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Campus Coffee Order</Text>

      <Text style={styles.countText}>Cups of Coffee: {coffeeCount}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setCoffeeCount(coffeeCount + 1);
          }}
        >
          <Text style={styles.buttonText}>+ Add Cup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (coffeeCount > 1) {
              setCoffeeCount(coffeeCount - 1);
            }
          }}
        >
          <Text style={styles.buttonText}>- Remove Cup</Text>
        </TouchableOpacity>
      </View>

      <Link
        href={{
          pathname: "/receipt",
          params: { coffeeCount: coffeeCount },
        }}
        asChild
      >
        <TouchableOpacity style={styles.receiptButton}>
          <Text style={styles.receiptButtonText}>View Receipt</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4B2E2B",
    marginBottom: 30,
  },
  countText: {
    fontSize: 20,
    marginBottom: 20,
    color: "#333",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#6F4E37",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  receiptButton: {
    backgroundColor: "#A9746E",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  receiptButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
