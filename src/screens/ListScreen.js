import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    let friends = [
        {name: "Eva", age: 27},
        {name: "Saad", age: 30},
        {name: "Golam", age: 40}
    ]
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={(data) => {
                return <Text>name: {data.item.name}</Text>
            }}
        />)
}

export default ListScreen;