import React from "react";
import Home from "./src/components/Home";
import CartScreen from "./src/screens/CartScreen";
import Categories from "./src/screens/Categories";
import CheakoutScreen from "./src/screens/CheakoutScreen";
import OrderScreen from "./src/screens/OrderScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import Trending from "./src/screens/Trending";
import { View, Image, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator >

          <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ headerShown: false }} />

          <Stack.Screen name="CartScreen" component={CartScreen} options={{
            headerShown: false
          }} />

          <Stack.Screen name="CheakoutScreen" component={CheakoutScreen} options={{
            headerShown: false
          }} />

          <Stack.Screen name="OrderScreen" component={OrderScreen} options={{
            headerShown: false
          }} />

        </Stack.Navigator>
      </NavigationContainer>


      {/* <Home/> */}
      {/* <Categories/> */}
      {/* <Trending/> */}
      {/* <ProfileScreen/> */}

    </>
  );
}

export default App;