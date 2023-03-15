import React from 'react'
import { View, Text, Image } from 'react-native'
import { NativeBaseProvider, Flex, Box } from "native-base";
import { SliderBox } from "react-native-image-slider-box";

const ProductDetailScreen = () => {

    const images = [
        require('../assets/Shoes1.png'),
        require('../assets/Shoes1.png'),
        require('../assets/Shoes1.png'),
        require('../assets/Shoes1.png'),
    ]

    return (
        <NativeBaseProvider>
            <Box bg="white">
                <SliderBox images={images} dotColor="red" />
            </Box>
        </NativeBaseProvider>
    )
}

export default ProductDetailScreen;