import React from 'react'
import { NativeBaseProvider } from "native-base";
import HomNav from '../components/HomNav';
import HomeBody from '../components/HomeBody';
import Footer from '../components/Footer';

const Home = ({ navigation }) => {
    return (
        <NativeBaseProvider >
            <HomNav />
            {/* <HomeBody nvg={() => { navigation.navigate('ProductDetailScreen') }} /> */}
            <HomeBody/>
            <Footer />
        </NativeBaseProvider >
    )
}
export default Home;