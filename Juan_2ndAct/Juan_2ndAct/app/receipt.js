import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const PRICE_PER_CUP = 150;

export default function Receipt() {
  const { coffeeCount } = useLocalSearchParams();

  const cups = Number(coffeeCount);
  const totalBill = cups * PRICE_PER_CUP;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Your Receipt</Text>

      <View style={styles.card}>
        <Text style={styles.line}>Cups Ordered: {cups}</Text>
        <Text style={styles.line}>Price per Cup: ₱{PRICE_PER_CUP}</Text>
        <View style={styles.divider} />
        <Text style={styles.totalText}>Total Bill: ₱{totalBill}</Text>
      </View>

      <Text style={styles.thanks}>Thank you for ordering with us! ☕</Text>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  line: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 12,
  },
  totalText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6F4E37",
  },
  thanks: {
    marginTop: 24,
    fontSize: 16,
    color: "#666",
  },
});
