import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
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
                <SliderBox
                    images={images}
                    dotColor="red"
                    dotStyle={{ height: 8, width: 8, borderRadius: 50 }}
                    inactiveDotColor="black"
                    imageLoadingColor="black"
                    autoplay={true}
                    autoplayInterval={2000}
                    circleLoop={true}
                    onCurrentImagePressed ={(index)=> alert(index+1)}
                    firstItem={3}
                    paginationBoxVerticalPadding={20}
                />
            </Box>
        </NativeBaseProvider>
    )
}

export default ProductDetailScreen;