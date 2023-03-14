import React from 'react'
import { Text } from 'react-native'
import { NativeBaseProvider, Box, Flex, ScrollView } from "native-base";
import { product } from '../components/ProductDetail';
import { ProductCards } from '../components/ProductCards';
import Footer from '../components/Footer';


const Trending = () => {
    return (
        <NativeBaseProvider >

            <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>Trending</Text>
           
            <ScrollView>
                <Box bg="white">
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

          <Footer/>

        </NativeBaseProvider >
    )
}

export default Trending