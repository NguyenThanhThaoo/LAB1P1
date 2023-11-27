import { useState } from "react";
import React from "react";
import {Text, Button, View, StyleSheet} from "react-native"


export default () =>{

    const [pressCount, setPressCount] = useState(0);
    return(
    <View style={styles.container}>
        <Text>You've pressed the button: {pressCount} times(s)</Text>
        <Button 
        //title={`Press ${pressCount} times(s)`}
        title={`Press me`}
        onPress={()=> setPressCount(pressCount + 1)}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})