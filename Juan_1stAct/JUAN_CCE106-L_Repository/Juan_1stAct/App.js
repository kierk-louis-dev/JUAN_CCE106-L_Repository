import { StyleSheet, Text, View } from 'react-native';
import StatCard from './componets/StatCard';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.header}>My Custom dashboard</Text>
      <StatCard 
        title= "Total Users 👥"
        Value= "1,240"
        bgColor="#4f46e5"
      />
      <StatCard 
        title= "Revenue 💵"
        Value= "$12,450"
        bgColor="#059669"
      />

      <StatCard 
        title= "Pending Issues ⌛"
        Value= "3"
        bgColor="#d97706"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize:24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1f2937',
  },
});
