import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useState} from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleWin}>
          <Text>
            Score: {score}
          </Text>
      </TouchableOpacity>
      <Pressable>
        <Text>Press to Add 5.</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

const {score, setScore}= useState(0);

const handleWin = () => {
  setScore(score + 1);
};