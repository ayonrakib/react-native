import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  function navigateToComponent(componentName){
    props.navigation.navigate(`${componentName}`)
  }
  return (
    <View>
      <Text style={styles.text}>This is the home screen</Text>
      <Button onPress={() => navigateToComponent('Components')} title='Go to Components component!!'/>
      <Button onPress={() => navigateToComponent('List')} title='Go to List component!'></Button>
      <Button onPress={() => navigateToComponent('Image')} title='Go to Image Component!'></Button>
      <Button onPress={() => navigateToComponent('Counter')} title='Go to Counter Component!'></Button>
      <Button onPress={() => navigateToComponent('Color')} title='Go to Color Component!'></Button>
      <Button onPress={() => navigateToComponent('Square')} title='Go to Square Component!'></Button>
      <Button onPress={() => navigateToComponent('Text')} title='Go to Text Component!'></Button>
      <Button onPress={() => navigateToComponent('Box')} title='Go to Box Component!'></Button>
    </View>
    
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;