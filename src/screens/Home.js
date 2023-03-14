import React from 'react'
import { } from "react-native";
import { NativeBaseProvider} from "native-base";
import HomNav from '../Components/HomeScreen/HomNav';
import HomeBody from '../Components/HomeScreen/HomeBody';
import Footer from '../Components/Footer';


const Home = () => {
    return (
        <NativeBaseProvider >
            <HomNav />
            <HomeBody />
            <Footer/>
        </NativeBaseProvider >
    )
}

export default Home;