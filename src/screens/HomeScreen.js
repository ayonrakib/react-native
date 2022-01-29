import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  function showConsoleLogOnButtonPress(){
    console.log("button pressed!")
  }
  return (
    <View>
      <Button onPress={showConsoleLogOnButtonPress} title='Click me!'/>
      <Text style={styles.text}>This is the home screen</Text>
      <TouchableOpacity>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;