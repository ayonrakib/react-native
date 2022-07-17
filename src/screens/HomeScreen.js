import React, {useReducer} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import BottomNavigationIcon from '../components/BottomNavigationIcon';
import getStyles from '../styles/styles';
import HomePage from './HomePage';
import NewsPage from './NewsPage';
import ProfilePage from './ProfilePage';
import PollPage from './PollPage';

function reducer(stateDictionary, action){
  // console.log("came into reducer method!");
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
      case "activateBottomNavigationPressableIcon":
        return { ...stateDictionary, activeBottomNavigationPressableIconNumber: action.data.iconNumber }
        break;
      case "setComponentIndex":
        console.log("the index to be set in setComponentIndex is: ",action.data)
        return { ...stateDictionary, componentIndex : action.data.componentIndex, componentToLoad : screenComponents[action.data.componentIndex]};
        break;
  }
}


const screenComponents = [<HomePage/>, <NewsPage/>, <ProfilePage/>, <PollPage/>];

const HomeScreen = (props) => {
  const [stateDictionary, dispatch] = useReducer(reducer, 
    { 
      componentToLoad : <HomePage/>, 
      activeBottomNavigationPressableIconComponent: <BottomNavigationIcon 
                                                        iconName = "home" 
                                                        iconColor = "white" 
                                                        style={getStyles().bottomNavigationIconStyleActive} 
                                                    />, 
      activeBottomNavigationPressableIconNumber : 0, 
      componentIndex: 0
    }); 
  
  console.log("icon number active: ",stateDictionary.activeBottomNavigationPressableIconNumber)
  console.log("index number active: ",stateDictionary.componentIndex)


  function setComponentIndex(index){
    console.log("came inside setComponentIndex method with value: ",index)
    dispatch({ name : "setComponentIndex" , data : { componentIndex : index } });
  }


  function navigateToComponent(componentName){
    props.navigation.navigate(`${componentName}`)
  }


  function activateBottomNavigationPressableIcon(props){
    dispatch({ name: "activateBottomNavigationPressableIcon", data : { iconNumber: props } })
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
          <BottomNavigation 
                activateBottomNavigationPressableIcon={activateBottomNavigationPressableIcon}  
                activeBottomNavigationPressableIconNumber={stateDictionary.activeBottomNavigationPressableIconNumber}
                setComponentIndex = {setComponentIndex}
                componentIndex = {stateDictionary.componentIndex}   
          />
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