import React from "react";
import Home from "./src/screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import Categories from "./src/screens/Categories";
import Footer from "./src/components/Footer";

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>

      <NativeBaseProvider >
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} /> */}
          </Stack.Navigator>
        </NavigationContainer>
        <Footer/>
      </NativeBaseProvider >
    </>
  );
}
export default App;

// import Icon from "react-native-vector-icons/FontAwesome"
// <TouchableOpacity onPress={() => { }}>
//     <Icon name="heart-o" size={20} color={"red"} />
// </TouchableOpacity>