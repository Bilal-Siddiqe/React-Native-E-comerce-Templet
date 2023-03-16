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
        require('../assets/Shoes1.png'),
    ]



    return (
        <NativeBaseProvider >
            <Box bg={["#e6e6fa"]}>
                <SliderBox
                    images={images}
                    dotColor="red"
                    dotStyle={{ height: 8, width: 8, borderRadius: 50 }}
                    inactiveDotColor="black"
                    imageLoadingColor="black"
                    autoplay={true}
                    autoplayInterval={5000}
                    circleLoop={true}
                    onCurrentImagePressed={(index) => alert(index + 1)}
                    firstItem={2}
                    paginationBoxVerticalPadding={15}
                    sliderBoxHeight={250}
                />

                <Box bg="white" pt="10" pl="5" pr="5" pb="2" style={{ borderTopStartRadius: 40, borderTopEndRadius: 40 }}>

                    <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Text style={{ color: "black" }}>Colors :</Text>
                        <View style={{ height: 25, width: 30, backgroundColor: "red", borderRadius: 5 }}></View>
                        <View style={{ height: 25, width: 30, backgroundColor: "blue", borderRadius: 5 }}></View>
                        <View style={{ height: 25, width: 30, backgroundColor: "green", borderRadius: 5 }}></View>
                        <View style={{ height: 25, width: 30, backgroundColor: "purple", borderRadius: 5 }}></View>
                        <Text style={{ color: "black", fontSize: 16, marginRight: 40, marginLeft: -5 }}> > </Text>
                        <Text style={{ color: "green" }}> icon </Text>
                    </Flex>

                    <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Text style={{ color: "black", paddingTop: 25, fontWeight: "bold", fontSize: 15 }}>
                            Pumma Running Shoes
                        </Text>
                        <Text
                            style={{ paddingTop: 25, color: "green" }}>
                            In Stock
                        </Text>
                    </Flex >

                    <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Text style={{ color: "black", paddingTop: 25, fontWeight: "bold", fontSize: 20, color: "blue" }}>
                            $350
                        </Text>
                        <Box>
                            <Text style={{ paddingTop: 25, color: "green", textAlign: 'right' }}>
                                Stars
                            </Text>
                            <Text style={{ color: "green", fontSize: 7 }}>
                                ( 150 Reviews)
                            </Text>
                        </Box>
                    </Flex >

                    {/* This is horizaontal Line */}
                    <View style={{ borderTopWidth: 0.2, borderTopColor: "black", marginVertical: 20, marginRight: 5 }}></View>


                    <Flex flexDirection="row" alignItems="center" justifyContent="space-around">
                        <Text style={{ color: "black" }}>Available Sizes :</Text>
                        <View style={{ height: 20, width: 35, backgroundColor: "#dcdcdc", borderRadius: 5, padding: 1 }}>
                            <Text style={{ color: "black", textAlign: "center" }}> 6 </Text>
                        </View>
                        <View style={{ height: 20, width: 35, backgroundColor: "#dcdcdc", borderRadius: 5, padding: 1 }}>
                            <Text style={{ color: "black", textAlign: "center" }}> 7 </Text>
                        </View>
                        <View style={{ height: 20, width: 35, backgroundColor: "#dcdcdc", borderRadius: 5, padding: 1 }}>
                            <Text style={{ color: "black", textAlign: "center" }}> 8 </Text>
                        </View>
                        <View style={{ height: 20, width: 35, backgroundColor: "#dcdcdc", borderRadius: 5, padding: 1 }}>
                            <Text style={{ color: "black", textAlign: "center" }}> 3 </Text>
                        </View>
                    </Flex>

                    <Box>
                        <Text style={{ color: "black", paddingTop: 25, fontWeight: "bold", fontSize: 15 }}>
                            Description
                        </Text>
                        <Text style={{ color: "black",fontWeight: "300", fontSize:13, paddingVertical:3 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi excepturi soluta sapiente accusantium doloribus dicta reiciendis libero nihil dolorem fuga natus cum dolor consequatur officiis aliquid, dolorum ab voluptates? voluptatum architecto aspernatur odio labore sit reiciendis vel deserunt, sapiente, assumenda mollitia, minus debitis accusamus veniam libero in numquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi excepturi soluta sapiente accusantium doloribus dicta reiciendis libero nihil dolorem fuga natus cum dolor consequatur officiis aliquid, dolorum ab voluptates?
                        </Text>
                    </Box>


                </Box>

            </Box>
        </NativeBaseProvider>
    )
}

export default ProductDetailScreen;