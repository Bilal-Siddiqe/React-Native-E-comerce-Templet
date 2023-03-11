import React from 'react'
import { } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import HomNav from './HomNav';
import HomeBody from './HomeBody';
import Footer from './Footer';


const Home = () => {
    return (
        <NativeBaseProvider >
            <HomNav />
            <HomeBody />
            <Footer />
        </NativeBaseProvider >
    )
}

export default Home;