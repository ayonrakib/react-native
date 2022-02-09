import React, {useReducer} from "react";
import { View, Text, TextInput } from "react-native";
import getStyles from '../styles/styles';


function reducer(textStateDictionary, action){
    switch(action.name){

        case "changeName":
            return { ...textStateDictionary,  name : action.data.text}
        
        case "changePassword":
            if (action.data.password.length <= 5){
                return { ...textStateDictionary,  password : action.data.password, errorMessage : "Password must be greater than 5 characters"}
            }
            else{
                return { ...textStateDictionary, password : action.data.password, errorMessage : "" }
            }

    }
    
}

export default function TextScreen(){
    const [textStateDictionary, dispatch] = useReducer(reducer, { name : "" , password : "" , errorMessage : "" });
    return(
        <View>
            <TextInput 
                style = {getStyles().textInputBlockStyle}
                autoCapitalize="none"
                autoCorrect = {false}
                value={textStateDictionary.name}
                onChangeText = {(newText) => dispatch({ name : "changeName" , data : { text : newText }})}
            />
            <Text>My name is: {textStateDictionary.name}</Text>

            <TextInput
                style = {getStyles().textInputBlockStyle}
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry = {true}
                onChangeText = {(newPassword) => dispatch({ name : "changePassword" , data : { password : newPassword }})}
            />
            <Text>My password is: {textStateDictionary.password}</Text>
            <Text>{textStateDictionary.errorMessage}</Text>
        </View>
    )
}