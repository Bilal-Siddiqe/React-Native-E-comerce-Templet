import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { NativeBaseProvider, Flex, Box } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import Footer from '../components/Footer';

const ProfileScreen = () => {


    return (
        <NativeBaseProvider >
            <Box bg={["#e6e6fa"]} >
                <Text style={{ color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>My Profile</Text>

                <Flex justifyContent={"center"} alignItems={"center"} py={5}>
                    <Image source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                        style={{ width: 100, height: 120, borderRadius: 5 }} />
                    <Flex py={3} textAlign="center">
                        <Text style={{ color: "black", fontWeight: 'bold', textAlign: "center" }}>User Name</Text>
                        <Text style={{ color: "gray", textAlign: "center" }}>Username@gmail.com</Text>
                    </Flex>
                </Flex>


                <Box bg="white" pt="10" pl="5" pr="5" pb="5" style={{ borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                    <Box mb={10}>
                        <Flex flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} py={3}>
                            <Text style={{ color: "black" }}>Edit Profile</Text>
                            <Text style={{ color: "black", fontSize: 16 }}> {">"} </Text>
                        </Flex>
                        <Flex flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} py={3}>
                            <Text style={{ color: "black" }}>Wish List</Text>
                            <Text style={{ color: "black", fontSize: 16 }}> {">"} </Text>
                        </Flex>
                        <Flex flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} py={3}>
                            <Text style={{ color: "black" }}>Manage Address</Text>
                            <Text style={{ color: "black", fontSize: 16 }}> {">"} </Text>
                        </Flex>
                        <Flex flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} py={3}>
                            <Text style={{ color: "black" }}>My Orders</Text>
                            <Text style={{ color: "black", fontSize: 16 }}> {">"} </Text>
                        </Flex>
                        <Flex flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} py={3}>
                            <Text style={{ color: "black" }}>Change Password</Text>
                            <Text style={{ color: "black", fontSize: 16 }}> {">"} </Text>
                        </Flex>
                        <Flex flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} py={3}>
                            <Text style={{ color: "black" }}>Logout</Text>
                            <Text style={{ color: "black", fontSize: 16 }}> {">"} </Text>
                        </Flex>


                    </Box>
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}

export default ProfileScreen