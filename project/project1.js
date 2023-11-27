import React from "react";
import {Text, View, StyleSheet} from "react-native";


const Ex1 = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text>Hello world</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : 'aqua',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Ex1;