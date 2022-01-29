import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    let friends = [
        {name: "Eva", age: 27},
        {name: "Saad", age: 30},
        {name: "Golam", age: 40}
    ]
    const hero = {
        name: 'Batman',
        age: 50,
        realName: 'Bruce Wayne'
      };
    const { name, comicBook } = hero;
    console.log("destructured hero name: ",name);
    console.log("destructured hero real name: ",comicBook);
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={(data) => {
                // let itemWithBraces = {item}
                // console.log("value of {item} is: ",itemWithBraces)
                // Object.keys(itemWithBraces).forEach((prop)=> console.log("current key for item with braces: ",prop));
                // return <Text>{item.name} - Age {item.age}</Text>
                console.log("data input is: ",data)
            }}
        />)
}

export default ListScreen;