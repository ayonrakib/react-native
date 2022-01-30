import React from "react";
import { View, Text } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail caption = "Beach" imageSource = {require('../../assets/beach.jpg')} imageScore="6"/>
            <ImageDetail caption = "Mountain" imageSource = {require('../../assets/mountain.jpg')} imageScore="7"/>
            <ImageDetail caption = "Forest" imageSource = {require('../../assets/forest.jpg')} imageScore="8"/>
        </View>
    )
}

export default ImageScreen;