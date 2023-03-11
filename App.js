import React from "react";
import { NavigationContainer } from 'react-navigation/native';
import { createDrawerNavigator } from 'react-navigation/drawer';
import CustomSidebarMenu from './src/screens/CustomSidebarMenu';
import Home from "./src/components/Home";


const Drawer = createDrawerNavigator();

function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu {...props} />}>

        <Drawer.Screen name='Home' component={Home} />

      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default App;