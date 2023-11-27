// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Screen1 = ({ navigation }) => (
//   <View>
//     <Text>Project 1</Text>
//     <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
//       <Text>Project2</Text>
//     </TouchableOpacity>
//   </View>
// );

// const Screen2 = ({ navigation }) => (
//   <View>
//     <Text>Screen 2</Text>
//     <TouchableOpacity onPress={() => navigation.navigate("Screen3")}>
//       <Text>Go to Screen 3</Text>
//     </TouchableOpacity>
//   </View>
// );

// const Screen3 = ({ navigation }) => (
//   <View>
//     <Text>Screen 3</Text>
//     <TouchableOpacity onPress={() => navigation.navigate("Screen4")}>
//       <Text>Go to Screen 4</Text>
//     </TouchableOpacity>
//   </View>
// );

// const Screen4 = ({ navigation }) => (
//     <View>
//       <Text>Screen 4</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("Screen5")}>
//         <Text>Go to Screen 5</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const Screen5 = ({ navigation }) => (
//     <View>
//       <Text>Screen 5</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("Screen6")}>
//         <Text>Go to Screen 6</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const Screen6 = ({ navigation }) => (
//     <View>
//       <Text>Screen 6</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("Screen7")}>
//         <Text>Go to Screen 7</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const Screen7 = ({ navigation }) => (
//     <View>
//       <Text>Screen 7</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("Screen8")}>
//         <Text>Go to Screen 8</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const Screen8 = ({ navigation }) => (
//     <View>
//       <Text>Screen 8</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("Goback")}>
//         <Text>Go back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// const Stack = createStackNavigator();

// const Home = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Screen1">
//         <Stack.Screen name="Screen1" component={Screen1} />
//         <Stack.Screen name="Screen2" component={Screen2} />
//         <Stack.Screen name="Screen3" component={Screen3} />
//         <Stack.Screen name="Screen4" component={Screen4} />
//         <Stack.Screen name="Screen5" component={Screen5} />
//         <Stack.Screen name="Screen6" component={Screen6} />
//         <Stack.Screen name="Screen7" component={Screen7} />
//         <Stack.Screen name="Screen8" component={Screen8} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Home;
// import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ex1 from "./project/project1";
import Ex2 from "./project/project2";
import Project4 from "./project/project4";
import Project3 from "./project/project3";
import project5 from "./project/project5";
import project6 from "./project/project6";
import project7 from "./project/project7";
import project8 from "./project/project8";

const projects = [
  { id: "project1", name: "Project 1", component: Ex1 },
  { id: "project2", name: "Project 2", component: Ex2 },
  { id: "project3", name: "Project 3", component: Project3 },
  { id: "project4", name: "Project 4", component: Project4 },
  { id: "project5", name: "Project 5", component: project5 },
  { id: "project6", name: "Project 6", component: project6 },
  { id: "project7", name: "Project 7", component: project7 },
  { id: "project8", name: "Project 8", component: project8 },
];

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {projects.map((project) => (
        <TouchableOpacity
          key={project.id}
          style={styles.projectButton}
          onPress={() => navigation.navigate(project.id)}
        >
          <Text>{project.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  projectButton: {
    backgroundColor: "aqua",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {projects.map((project) => (
          <Stack.Screen
            key={project.id}
            name={project.id}
            component={project.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
