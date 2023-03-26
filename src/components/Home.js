import React from 'react'
import { } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import HomNav from './HomNav';
import HomeBody from './HomeBody';
import Footer from './Footer';


const Home = ({ navigation }) => {
    return (
        <NativeBaseProvider >
            <HomNav />
            <HomeBody nvg={() => {navigation.navigate('Categories') }}/>
            <Footer />
        </NativeBaseProvider >
    )
}

export default Home;