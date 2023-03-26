import React from 'react'
import { Box } from "react-native";
import { NativeBaseProvider} from "native-base";
import HomNav from '../Components/HomeScreen/HomNav';
import HomeBody from '../Components/HomeScreen/HomeBody';
import Footer from '../Components/Footer';


const Home = ({ navigation }) => {
    return (
        <NativeBaseProvider >
            <HomNav />
            <HomeBody nvg = {() => { navigation.navigate('Categories') }}/>
            <Footer/>
        </NativeBaseProvider >
    )
}

export default Home;