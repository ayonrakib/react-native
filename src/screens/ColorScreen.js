import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

export default function ColorScreen(){
    const [colors, setColors] = useState([]);
    function addColorBlock(){
        setColors([...colors, getRGBValues()]);
    }
    function getRGBValues(){
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        return `rgb(${red}, ${green}, ${blue})`
    }

    return (
        <View>
            <Button title='Add a color' onPress={addColorBlock}></Button>
            
            <FlatList
                keyExtractor={(colors) => colors}
                data={colors}
                renderItem={(data) => {
                    return (
                        <View style={{height: 100, width: 100, backgroundColor: data.item}}></View>
                    )
                }}    
            />
        </View>
    )
}