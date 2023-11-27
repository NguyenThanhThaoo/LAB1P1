import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import project4 from './project/project4';
import project3 from './project/project3';
import project5 from './project/project5';
import project6 from './project/project6';
import project7 from './project/project7';
import project8 from './project/project8';
import Ex1 from './project/project1';
import Ex2 from './project/project2';

const Stack = createStackNavigator();


const Home = ({navigation}) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("Ex1")}>
                    <Text>Project 1</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("Ex2")}>
                    <Text>Project 2</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("project3")}>
                    <Text>Project 3</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("project4")}>
                    <Text>Project 4</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("project5")}>
                    <Text>Project 5</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("project6")}>
                    <Text>Project 6</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("project7")}>
                    <Text>Project 7</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("project8")}>
                    <Text>Project 8</Text>
                </TouchableOpacity>
            </View>





        </View>
    )
}
const App = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Ex1" component={Ex1} />
                <Stack.Screen name="Ex2" component={Ex2} />
                <Stack.Screen name="project3" component={project3} />
                <Stack.Screen name="project4" component={project4} />
                <Stack.Screen name="project5" component={project5} />
                <Stack.Screen name="project6" component={project6} />
                <Stack.Screen name="project7" component={project7} />
                <Stack.Screen name="project8" component={project8} />

            </Stack.Navigator>
        </NavigationContainer>
    )

}
const styles = StyleSheet.create({
    button:{
        margin:10,
        padding: 15,
        width: 150,
        alignItems:'center',
        backgroundColor:'transparent',
        borderWidth: 1,
        borderColor:'green',
        borderRadius: 5
    }
})
export default App
