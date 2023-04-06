import React from 'react'
import { Image, ScrollView } from "react-native";
import { Text, Box, Flex } from "native-base";
import { TopCatProduct, BannerProduct, NewProduct, TrendingProduct } from './ProductDetail';
import { ProductCards } from './ProductCards';

const HomeBody = (props) => {
    return (
        <>
            <ScrollView>

                {/* Top Categories Section */}
                <Box bg="white" p="2">

                    <Flex flexDirection={"row"} justifyContent={"space-between"}>
                        <Text ml="2" style={{ fontWeight: "bold", fontSize: 16 }}>Top Categoreis</Text>
                        <Text ml="2" style={{ fontSize: 14, color: "purple", marginRight: 3 }}>VIEW ALL</Text>
                    </Flex>

                    <Box bg="white" p="2" mt="2">
                        <ScrollView horizontal={true}>
                            <Flex direction="row" alignItems="center" justifyContent="center" >
                                {TopCatProduct.map((elements) => {
                                    return (
                                        <>
                                            <Flex flexDirection='column' alignItems="center" justifyContent="center" >
                                                <Image source={{ uri: `${elements}` }}
                                                    style={{ width: 55, height: 60, marginHorizontal: 3, borderWidth: 0.05, borderColor: "black", borderRadius: 3 }} />
                                                <Text style={{ fontSize: 12 }}>Shoe</Text>
                                            </Flex>
                                        </>
                                    )
                                })}
                            </Flex>
                        </ScrollView>
                    </Box>
                </Box>

                {/* Horizontal Banners Section */}
                <ScrollView horizontal={true}>
                    <Box bg="white" p="2">
                        <Flex direction="row" alignItems="center" justifyContent="center" >
                            {BannerProduct.map((elements) => {
                                return (
                                    < Image source={{ uri: `${elements}` }}
                                        style={{ width: 320, height: 150, borderRadius: 8, marginHorizontal: 10 }} />
                                )
                            })}

                        </Flex>
                    </Box>
                </ScrollView>

                {/* New Producs Section */}
                <Box bg="white">
                    <Flex flexDirection={"row"} justifyContent={"space-between"} mt="4">
                        <Text ml="4" style={{ fontWeight: "bold", fontSize: 16 }}>New Products</Text>
                        <Text ml="2" style={{ fontSize: 14, color: "purple", marginRight: 10 }}>VIEW ALL</Text>
                    </Flex>
                    <Flex flexDirection='row' alignItems='center' justifyContent='center' flexWrap='wrap' p='1'>
                        {NewProduct.map((elements, index) => {
                            return (
                                <>
                                    <ProductCards url={elements} navg={props.nvg} />
                                </>
                            )
                        })}
                    </Flex>
                </Box>

                {/* Trending Section */}
                <ScrollView>
                    <Flex flexDirection={"row"} justifyContent={"space-between"} bg="white" pt="5">
                        <Text ml="3" style={{ fontWeight: "bold", fontSize: 16 }}>Top Categoreis</Text>
                        <Text ml="2" style={{ fontSize: 14, color: "purple", marginRight: 10 }}>VIEW ALL</Text>
                    </Flex>
                    <Box bg="white" pt="1">
                        <Flex flexDirection='row' alignItems='center' justifyContent='center' flexWrap='wrap' p='1'>
                            {TrendingProduct.map((elements, index) => {
                                return (
                                    <>
                                        <ProductCards url={elements} navg={() => { navigation.navigate('ProductDetailScreen') }} />
                                    </>
                                )
                            })}
                        </Flex>
                    </Box>
                </ScrollView>

            </ScrollView>
        </>
    )
}

export default HomeBody