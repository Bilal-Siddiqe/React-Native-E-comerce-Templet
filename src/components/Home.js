import React from 'react'
import { Image, ScrollView, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NativeBaseProvider, Text, Box, Flex, Input, AspectRatio, Center, Stack, Heading, HStack } from "native-base";
import HomeCards from './HomeCards';


const Home = () => {
    const product =
        [
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
        ];



    return (
        <NativeBaseProvider>
            <Box bg="white" p="2" pl="8" pt="3">
                <Flex direction="row" alignItems="center" >
                    <Image source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={{ width: 40, height: 45, borderRadius: 100 }} />
                    <Text pl="20" >Otrixweb</Text>
                    <Text pl="20" >Icons</Text>
                </Flex>
            </Box>

            <Box bg="white" p="2">
                <Input mx="3" placeholder="Input" />
            </Box>

            <Box bg="white" p="2">
                <Text ml="2" style={{ fontWeight: "bold", fontSize: 16 }}>Top Categoreis</Text>
                <Box bg="white" p="2">
                    <Flex direction="row" alignItems="center" justifyContent="center" >
                        <Image source={{ uri: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            style={{ width: 50, height: 60, marginHorizontal: 15 }} />
                        <Image source={{ uri: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            style={{ width: 50, height: 60, marginHorizontal: 15 }} />
                        <Image source={{ uri: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            style={{ width: 50, height: 60, marginHorizontal: 15 }} />
                        <Image source={{ uri: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            style={{ width: 50, height: 60, marginHorizontal: 15 }} />
                    </Flex>
                </Box>
            </Box>

            <Box bg="white" p="2">
                <Flex direction="row" alignItems="center" justifyContent="center" >
                    <Image source={{ uri: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={{ width: 300, height: 150, borderRadius: 8 }} />
                </Flex>
            </Box>

            <Box bg="white" p="2">
                <Text ml="2" style={{ fontWeight: "bold", fontSize: 16 }}>New Products</Text>

                {product.map((elements, index) => {
                    return (
                        <Flex direction="row" alignItems="center" justifyContent="center" p="2" flexWrap="wrap">
                            <HomeCards url={elements} key={index} />
                        </Flex>
                    )
                })}


            </Box>
        </NativeBaseProvider >


    )
}

export default Home;