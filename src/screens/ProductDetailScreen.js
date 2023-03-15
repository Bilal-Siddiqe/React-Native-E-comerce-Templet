import React from 'react'
import { View, Text, Image } from 'react-native'
import { NativeBaseProvider, Flex, Box } from "native-base";
import { SliderBox } from "react-native-image-slider-box";

const ProductDetailScreen = () => {

    
    return (
        <NativeBaseProvider>
            <Box bg="white">
                <Text style={{color:'black'}}>ProductDetailScreen</Text>
                <Flex alignItems="center" p="0" >
                    <Image source={require('../assets/Shoes1.png')} />
                </Flex>
            </Box>
        </NativeBaseProvider>
    )
}

export default ProductDetailScreen;