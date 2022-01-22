import { StyleSheet } from "react-native";

export default function getStyles(){
    const styles = StyleSheet.create({
        textBlockStyle: {
            backgroundColor: "gray",
            display: "flex",
            justifyContent: "center",
            fontSize: 45
        },
        nameBLockStyle:{
            fontSize: 30
        }
        
    });

    return styles;
}