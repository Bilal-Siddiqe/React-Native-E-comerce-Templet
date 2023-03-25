import { View, Text, Card, Button, Image, TextInput } from 'react-native'
import { NativeBaseProvider, Box, Flex, ScrollView, Heading } from "native-base";
import React from 'react'
import Footer from '../components/Footer';


const OrderScreen = () => {
    return (
        <NativeBaseProvider>
            <Box bg="white" height={720} paddingx="10" paddingY="1" color={"black"}>
                <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>Cheakout</Text>

                

                <Footer />
            </Box>
        </NativeBaseProvider>
    )
}

export default OrderScreen