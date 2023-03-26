import React from 'react'
import { Image, ScrollView } from "react-native";
import { Text, Box, Flex } from "native-base";
import { product } from './ProductDetail';
import { ProductCards } from './ProductCards';

const HomeBody = (props) => {
    return (
        <>
            <ScrollView>

                <Box bg="white" p="2">
                    <Text ml="2" style={{ fontWeight: "bold", fontSize: 16 }}>Top Categoreis</Text>
                    <Box bg="white" p="2">
                        <ScrollView horizontal={true}>
                            <Flex direction="row" alignItems="center" justifyContent="center" >
                                {product.map((elements) => {
                                    return (
                                        <>
                                            <Flex flexDirection='column' alignItems="center" justifyContent="center" >
                                                <Image source={{ uri: `${elements}` }}
                                                    style={{ width: 50, height: 60, marginHorizontal: 15 }} />
                                                <Text>Sneaker</Text>
                                            </Flex>
                                        </>
                                    )
                                })}
                            </Flex>
                        </ScrollView>
                    </Box>
                </Box>


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
                    <Text ml="3" style={{ fontWeight: "bold", fontSize: 16 }}>New Products</Text>
                    <Flex flexDirection='row' alignItems='center' justifyContent='center' flexWrap='wrap' p='1'>
                        {product.map((elements, index) => {
                            return (
                                <>
                                    <ProductCards url={elements} navg={props.nvg} />
                                </>
                            )
                        })}
                    </Flex>
                </Box>
            </ScrollView>
        </>
    )
}

export default HomeBody