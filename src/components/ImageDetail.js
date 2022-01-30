import React from "react";
import { View, Text, Image } from "react-native";
import getStyles from "../styles/styles";


const ImageDetail = (props) => {
    // console.log("props object value is: ",props)
    // console.log("image source is: ",props.imageSource)
    return(
        <View style={getStyles().imageBlock}>
            <Image source={props.imageSource}/>
            <Text>{props.caption}</Text>
            <Text>Image score - {props.imageScore}</Text>
        </View>
    ) 
}

export default ImageDetail;