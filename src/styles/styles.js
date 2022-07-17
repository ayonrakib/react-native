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
        },
        imageBlock:{
            display: "flex",
            justifyContent:"center",
            backgroundColor:"gray",
            textAlign:"center"
        },
        textInputBlockStyle:{
            margin:15,
            borderColor:"black",
            borderWidth:1
        },
        bottomNavigationIconStyle:{
            marginBottom: 2,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
            height: 25,
            borderRadius: 5
        },
        bottomNavigationIconStyleActive:{
            marginBottom: 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            padding: 5,
            height: 25,
            borderRadius: 5
        },
        bottomNavigationTextStyle:{
            color: "white",
            marginTop: 2
        },
        bottomNavigationTextStyleActive:{
            color: "black",
            marginTop: 2
        },
        bottomNamvigationPressableBlock:{
            width: 50,
            alignItems: "center"
        }
    });

    return styles;
}