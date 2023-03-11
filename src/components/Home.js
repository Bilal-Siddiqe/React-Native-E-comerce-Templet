import React from 'react'
import { Image, ScrollView, View } from "react-native";
import { NativeBaseProvider, Text, Box, Flex, Input, AspectRatio, Center, Stack, Heading, HStack } from "native-base";
import { ProductCards } from './ProductCards';
import product from './ProductDetail';


const Home = () => {
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

            <ScrollView>
                <ScrollView horizontal={true}>
                    <Box bg="white" p="2">
                        <Text ml="2" style={{ fontWeight: "bold", fontSize: 16 }}>Top Categoreis</Text>
                        <Box bg="white" p="2">
                            <Flex direction="row" alignItems="center" justifyContent="center" >
                                {product.map((elements) => {
                                    return (
                                        <Image source={{ uri:`${elements}` }}
                                            style={{ width: 50, height: 60, marginHorizontal: 15 }} />
                                    )
                                })}
                            </Flex>
                        </Box>
                    </Box>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Box bg="white" p="2">
                        <Flex direction="row" alignItems="center" justifyContent="center" >
                            {product.map((elements) => {
                                return (
                                    < Image source={{ uri: `${elements}` }}
                                        style={{ width: 320, height: 150, borderRadius: 8, marginHorizontal: 10 }} />
                                )
                            })}

                        </Flex>
                    </Box>
                </ScrollView>


                <Box bg="white">
                    <Text ml="2" style={{ fontWeight: "bold", fontSize: 16 }}>New Products</Text>
                    <Flex flexDirection='row' alignItems='center' justifyContent='center' flexWrap='wrap' p='1'>
                        {product.map((elements, index) => {
                            return (
                                <>
                                    <ProductCards url={elements} />
                                </>
                            )
                        })}
                    </Flex>
                </Box>
            </ScrollView>

        </NativeBaseProvider >
    )
}

export default Home;