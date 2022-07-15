import React, {useReducer} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import HomePage from './HomePage';
import NewsPage from './NewsPage';
import ProfilePage from './ProfilePage';
import PollPage from './PollPage';

function reducer(stateDictionary, action){
  console.log("came into reducer method!");
  switch(action.name){
      case "loadFirstComponent":
          return { ...stateDictionary, componentToLoad : <HomePage/>};
          break;
      case "loadSecondComponent":
          return { ...stateDictionary, componentToLoad : <NewsPage/>};
          break;
      case "loadThirdComponent":
          return { ...stateDictionary, componentToLoad : <ProfilePage/>};
          break;
      case "loadFourthComponent":
          return { ...stateDictionary, componentToLoad : <PollPage/>};
          break;
  }
}

const HomeScreen = (props) => {
  const [stateDictionary, dispatch] = useReducer(reducer, { componentToLoad : <HomePage/> }); 
  function showScreen(props){
      console.log("came to showScreen method and the native id is: ",props)
      if(props === 1){
          console.log("component 1 was clicked!")
          dispatch({ name : "loadFirstComponent", data : { componentNumber : 1 }});
      }
      else if(props ==2){
          console.log("component 2 was clicked!")
          dispatch({ name : "loadSecondComponent", data : { componentNumber : 2 }});
      }
      else if(props ==3){
          console.log("component 3 was clicked!")
          dispatch({ name : "loadThirdComponent", data : { componentNumber : 3 }});
      }
      else if(props ==4){
          console.log("component 4 was clicked!")
          dispatch({ name : "loadFourthComponent", data : { componentNumber : 4 }});
      }
  }
  function navigateToComponent(componentName){
    props.navigation.navigate(`${componentName}`)
  }
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: "white", flexDirection: "row", flex:10, justifyContent: "center", alignItems: "center"}}>
        <View>
          {stateDictionary.componentToLoad}
        </View>
      </View>
      <View style={{flex: 1, justifyContent: "flex-end"}}>
        {/* <Text style={styles.text}>This is the home screen</Text> */}
        {/* <Button onPress={() => navigateToComponent('Components')} title='Go to Components component!!'/>
        <Button onPress={() => navigateToComponent('List')} title='Go to List component!'></Button>
        <Button onPress={() => navigateToComponent('Image')} title='Go to Image Component!'></Button>
        <Button onPress={() => navigateToComponent('Counter')} title='Go to Counter Component!'></Button>
        <Button onPress={() => navigateToComponent('Color')} title='Go to Color Component!'></Button>
        <Button onPress={() => navigateToComponent('Square')} title='Go to Square Component!'></Button>
        <Button onPress={() => navigateToComponent('Text')} title='Go to Text Component!'></Button>
        <Button onPress={() => navigateToComponent('Box')} title='Go to Box Component!'></Button> */}
        <View>
          <BottomNavigation showScreen={showScreen}/>
        </View>   
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;