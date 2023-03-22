import { View, Text, Card, Button, Image, TextInput } from 'react-native'
import { NativeBaseProvider, Box, Flex, ScrollView, Heading } from "native-base";
import React from 'react'
import Footer from '../components/Footer';


const CartScreen = () => {
    return (
        <NativeBaseProvider>

            <Box bg="white" height={720} paddingx="10" paddingY="1">

                <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>Shopping Cart</Text>

                <Flex bg="white" paddingY="2" alignItems="center">
                    <Flex flexDirection="row" bg="white" borderWidth="1" width="320" height="100" borderRadius="10" padding="2" justifyContent="space-between">
                        <Image source={{ uri: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                            style={{ width: 100, height: 70 }} />

                        <Flex alignItems="center">
                            <Text style={{ backgroundColor: "white", color: "black", fontSize: 10, marginVertical: 2 }}>Shopping Cart</Text>
                            <Heading size="sm" ml="-1" >
                                $350
                            </Heading>
                            <Flex flexDirection="row" >
                                <Text style={{ backgroundColor: "white", color: "black", fontSize: 14, marginHorizontal: 2 }}>-</Text>
                                <Text style={{ backgroundColor: "white", color: "black", fontSize: 14, marginHorizontal: 2 }}>6</Text>
                                <Text style={{ backgroundColor: "white", color: "black", fontSize: 14, marginHorizontal: 2 }}>+</Text>
                            </Flex>
                        </Flex>

                        <Box>
                            <Text style={{ backgroundColor: "white", color: "black", fontSize: 10 }}>Desbin Icon</Text>
                        </Box>

                    </Flex>
                </Flex>



                <Box bg="white" >
                    <TextInput color="black" borderWidth={2} borderRadius={5} marginHorizontal={20} marginVertical={5} fontSize={15} />
                </Box>

                <View style={{ borderTopWidth: 0.2, borderTopColor: "black", marginVertical: 20, marginRight: 5 }}></View>

                <Flex flexDirection="row" justifyContent="space-between" alignItems="center" pr="5">
                    <Text style={{ color: "gray", paddingLeft: 25, fontSize: 15, paddingBottom: 10 }}>Sub</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 15, paddingBottom: 10 }}>$2100</Text>
                </Flex>
                <Flex flexDirection="row" justifyContent="space-between" alignItems="center" pr="5">
                    <Text style={{ color: "gray", paddingLeft: 25, fontSize: 15, paddingBottom: 10 }}>Discount</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 15, paddingBottom: 10 }}>$0</Text>
                </Flex>
                <Flex flexDirection="row" justifyContent="space-between" alignItems="center" pr="5">
                    <Text style={{ color: "gray", paddingLeft: 25, fontSize: 15, paddingBottom: 10 }}>Coupan</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 15, paddingBottom: 10 }}>-  $50</Text>
                </Flex>
                <Flex flexDirection="row" justifyContent="space-between" alignItems="center" pr="5">
                    <Text style={{ color: "gray", paddingLeft: 25, fontSize: 15, paddingBottom: 10 }}>Total</Text>
                    <Text style={{ color: "purple", fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>$2050</Text>
                </Flex>


                <Flex justifyContent="center" alignItems="center" marginBottom={210}>
                    <View style={{ height: 40, width: 320, backgroundColor: "purple", borderRadius: 5, marginVertical: 2 }}>
                        <Flex justifyContent="center" alignItems="center">
                            <Text style={{ color: "white", textAlign: "center", paddingVertical: 5 }}> Cheakout </Text>
                        </Flex>
                    </View>
                </Flex>

                <Footer />
            </Box>

        </NativeBaseProvider >
    )
}

export default CartScreen