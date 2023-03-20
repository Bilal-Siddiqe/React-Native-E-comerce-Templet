import { View, Text, Card, Button, Image } from 'react-native'
import { NativeBaseProvider, Box, Flex, ScrollView } from "native-base";
import React from 'react'
import Footer from '../components/Footer';


const CartScreen = () => {
    return (
        <NativeBaseProvider>

            <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>Shopping Cart</Text>


            <Flex justifyContent="center" alignItems="center" bg="white" padding="2">
                <Box borderWidth="1" bg="white" width="320" height="100" borderRadius="10" padding="2">
                    <Flex justifyContent="center" alignItems="center" bg="white" padding="2">
                        <Image source={{ uri: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                            style={{ width: 100, height: 20, marginHorizontal: 15 }} />
                    </Flex>
                </Box>
            </Flex>







            {/* <Footer /> */}

        </NativeBaseProvider>
    )
}

export default CartScreen