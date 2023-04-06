import React from 'react'
import { Box } from "react-native";
import { NativeBaseProvider} from "native-base";
import HomNav from '../components/HomNav';
import HomeBody from '../components/HomeBody';
import Footer from '../components/Footer';

const Home = ({ navigation }) => {
    return (
        <NativeBaseProvider >
            <HomNav/>
            <HomeBody nvg = {() => { navigation.navigate('Categories') }}/>
            <Footer/>
        </NativeBaseProvider >
    )
}

export default Home;