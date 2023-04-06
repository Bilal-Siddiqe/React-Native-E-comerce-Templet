import React from "react";
import Home from "./src/screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

          {/* <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />

          <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ headerShown: false }} />

          <Stack.Screen name="CartScreen" component={CartScreen} options={{
            headerShown: false
          }} />

          <Stack.Screen name="CheakoutScreen" component={CheakoutScreen} options={{
            headerShown: false
          }} />

          <Stack.Screen name="OrderScreen" component={OrderScreen} options={{
            headerShown: false
          }} /> */}
        </Stack.Navigator>
      </NavigationContainer>


      {/* <ProfileScreen/> */}
      
    </>
  );
}
export default App;