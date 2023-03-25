import { View, Text, Card, Button, Image, TextInput } from 'react-native'
import { NativeBaseProvider, Box, Flex, ScrollView, Heading } from "native-base";
import React from 'react'
import Footer from '../components/Footer';

const OrderScreen = () => {
    return (
        <NativeBaseProvider>
            <Box bg={"white"} height={720} paddingx="10" paddingY="1" color={"black"}>
                <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>Your Orders</Text>

                <Flex bg="white" paddingY="2" alignItems="center">
                    <Flex alignItems={"center"} flexDirection="row" bg="white" borderWidth="0.3" width="320" height="70" borderRadius="10" padding="2" >
                        <Image source={{ uri: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                            style={{ width: 80, height: 60, borderRadius: 5 }} />

                        <Flex pl={3}>
                            <Text style={{ backgroundColor: "white", color: "black", fontWeight: "bold", fontSize: 13 }}>
                                Party Wear Shoes
                            </Text>
                            <Text style={{ backgroundColor: "white", color: "gray", fontWeight: "bold", fontSize: 11 }}>
                                Order on 10 Oct 2022
                            </Text>
                            <Text style={{ backgroundColor: "white", color: "gray", fontWeight: "bold", fontSize: 11 }}>
                                Order Status Completed
                            </Text>
                        </Flex>

                    </Flex>


                    <Flex flexDirection="row" bg="white" borderWidth="0.3" width="320" borderRadius="10" padding="2" justifyContent="space-between" py={2} mt={1}>
                        <Flex alignItems="center">
                            <Text style={{ backgroundColor: "white", color: "black", fontSize: 12, fontWeight: "500" }}>Buy it again</Text>
                        </Flex>
                    </Flex>

                    <Flex flexDirection="row" bg="white" borderWidth="0.3" width="320" borderRadius="10" padding="2" justifyContent="space-between" py={2} mt={1}>
                        <Flex alignItems="center">
                            <Text style={{ backgroundColor: "white", color: "black", fontSize: 12, fontWeight: "500" }}>Order Details</Text>
                        </Flex>
                    </Flex>


                </Flex>


                <Flex bg="white" paddingY="2" alignItems="center">
                    <Flex alignItems={"center"} flexDirection="row" bg="white" borderWidth="0.3" width="320" height="70" borderRadius="10" padding="2" >
                        <Image source={{ uri: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                            style={{ width: 80, height: 60, borderRadius: 5 }} />

                        <Flex pl={3}>
                            <Text style={{ backgroundColor: "white", color: "black", fontWeight: "bold", fontSize: 13 }}>
                                Party Wear Shoes
                            </Text>
                            <Text style={{ backgroundColor: "white", color: "gray", fontWeight: "bold", fontSize: 11 }}>
                                Order on 10 Oct 2022
                            </Text>
                            <Text style={{ backgroundColor: "white", color: "gray", fontWeight: "bold", fontSize: 11 }}>
                                Order Status Completed
                            </Text>
                        </Flex>

                    </Flex>


                    <Flex flexDirection="row" bg="white" borderWidth="0.3" width="320" borderRadius="10" padding="2" justifyContent="space-between" py={2} mt={1}>
                        <Flex alignItems="center">
                            <Text style={{ backgroundColor: "white", color: "black", fontSize: 12, fontWeight: "500" }}>Buy it again</Text>
                        </Flex>
                    </Flex>

                    <Flex flexDirection="row" bg="white" borderWidth="0.3" width="320" borderRadius="10" padding="2" justifyContent="space-between" py={2} mt={1}>
                        <Flex alignItems="center">
                            <Text style={{ backgroundColor: "white", color: "black", fontSize: 12, fontWeight: "500" }}>Order Details</Text>
                        </Flex>
                    </Flex>


                </Flex>

                <Flex bg="white" paddingY="2" alignItems="center">
                    <Flex alignItems={"center"} flexDirection="row" bg="white" borderWidth="0.3" width="320" height="70" borderRadius="10" padding="2" >
                        <Image source={{ uri: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                            style={{ width: 80, height: 60, borderRadius: 5 }} />

                        <Flex pl={3}>
                            <Text style={{ backgroundColor: "white", color: "black", fontWeight: "bold", fontSize: 13 }}>
                                Party Wear Shoes
                            </Text>
                            <Text style={{ backgroundColor: "white", color: "gray", fontWeight: "bold", fontSize: 11 }}>
                                Order on 10 Oct 2022
                            </Text>
                            <Text style={{ backgroundColor: "white", color: "gray", fontWeight: "bold", fontSize: 11 }}>
                                Order Status Completed
                            </Text>
                        </Flex>

                    </Flex>


                    <Flex flexDirection="row" bg="white" borderWidth="0.3" width="320" borderRadius="10" padding="2" justifyContent="space-between" py={2} mt={1}>
                        <Flex alignItems="center">
                            <Text style={{ backgroundColor: "white", color: "black", fontSize: 12, fontWeight: "500" }}>Buy it again</Text>
                        </Flex>
                    </Flex>

                    <Flex flexDirection="row" bg="white" borderWidth="0.3" width="320" borderRadius="10" padding="2" justifyContent="space-between" py={2} mt={1}>
                        <Flex alignItems="center">
                            <Text style={{ backgroundColor: "white", color: "black", fontSize: 12, fontWeight: "500" }}>Order Details</Text>
                        </Flex>
                    </Flex>


                </Flex>

                <Box mb={120}></Box>

                <Footer />
            </Box>
        </NativeBaseProvider >
    )
}

export default OrderScreen;