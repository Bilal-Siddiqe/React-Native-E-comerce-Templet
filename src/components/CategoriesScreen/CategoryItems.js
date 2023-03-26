import React from 'react'
import { Text, Image, ScrollView } from 'react-native'
import { Box, Flex } from "native-base";
import { product } from '../ProductImages'


const CategoryItems = (props) => {
    return (
            <Box bg="white">
                <ScrollView>
                    <Box style={{ padding: 5 }}>
                        <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
                            {product.map((elements) => {
                                return (
                                    <Flex bg="white" justifyContent="center" alignItems="center" style={{
                                        borderWidth: 0.5,
                                        width: 150,
                                        height: 180,
                                        padding: 10,
                                        borderRadius: 5,
                                        margin: 5
                                    }}>
                                        <Image source={{ uri: `${elements}` }} style={{ width: "90%", height: "90%", borderRadius: 5 }}/>
                                        <Text onPress={props.navg} style={{ color: "black", textAlign: "center", fontWeight: "bold", margin: 4 }}>Cloths</Text>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    </Box>
                </ScrollView>
            </Box>
    )
}

export default CategoryItems