import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function BoxScreen(){

    const styles = StyleSheet.create({
        viewStyle : {
            borderWidth: 3,
            borderColor: 'black',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        textOneStyle : {
            borderWidth: 3,
            borderColor : 'red',
            height: 50,
            width: 50,
            backgroundColor: 'gray'
        },
        textTwoStyle : {
            borderWidth: 3,
            borderColor : 'red',
            alignSelf: 'center',
            height: 50,
            width: 50,
            backgroundColor: 'yellow'
        }
        ,
        textThreeStyle : {
            borderWidth: 3,
            borderColor : 'red',
            height: 50,
            width: 50,
            backgroundColor: 'green'
        }
    })
    return (
        <View>
            <View style = {styles.viewStyle}>
                <Text style = {styles.textOneStyle}>
                    Child 1
                </Text>

                <Text style = {styles.textThreeStyle}>
                    Child 3
                </Text>
            </View>
            <View>
                <Text style = {styles.textTwoStyle}>
                    Child 2
                </Text>
            </View>
        </View>


    )
}