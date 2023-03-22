import { View, Text, Card, Button, Image, TextInput } from 'react-native'
import { NativeBaseProvider, Box, Flex, ScrollView, Heading } from "native-base";
import React from 'react'
import Footer from '../components/Footer';


const CheakoutScreen = () => {
    return (
        <NativeBaseProvider>
            <Box bg="white" height={720} paddingx="10" paddingY="1" color={"black"}>
                <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>Cheakout</Text>

                <Flex flexDirection="row" justifyContent={"space-around"} alignItems={"center"}>
                    <View style={{ width: 150 }}>
                        <Button
                            title="Address"
                            onPress={() => { }}
                            color="#841584"

                        />
                    </View>
                    <View style={{ width: 150 }}>
                        <Button
                            title="Payment"
                            onPress={() => { }}
                            color="#841584"

                        />
                    </View>


                </Flex>

                <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 13, paddingBottom: 10 }}>Delivery Address</Text>

                <Flex>
                    <Box bg="white" width={300}>
                        <TextInput color="black" borderWidth={2} borderRadius={5} marginHorizontal={20} marginVertical={5} fontSize={15} height={150} />
                    </Box>
                </Flex>

                <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 13, paddingBottom: 10 }}>Order Summary</Text>

                <View style={{ borderTopWidth: 0.2, borderTopColor: "black", marginVertical: 20, marginRight: 5 }}></View>

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

                <Flex flexDirection="row" justifyContent="space-between" alignItems="center" pr="5" mt={70} mb={10}>
                    <Text style={{ color: "gray", paddingLeft: 25, fontSize: 15 }}>Total :</Text>
                    <Text style={{ color: "purple", fontWeight: "bold", fontSize: 18, marginLeft: -80 }}>$2050</Text>
                    <Button
                        title="Proceed to Pay"
                        onPress={() => { }}
                        color="#841584"

                    />
                </Flex>

                <Footer />
            </Box>
        </NativeBaseProvider>

    )
}

export default CheakoutScreen