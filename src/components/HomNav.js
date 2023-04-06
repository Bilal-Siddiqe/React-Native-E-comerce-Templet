import React from 'react'
import { Image, TouchableOpacity } from "react-native";
import { Text, Box, Flex, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"

const HomNav = () => {
    return (
        <>
            <Box bg="white">
                <Box bg="white" pt='3' pb='1'>
                    <Flex direction="row" justifyContent='space-between' alignItems='center' px="5" >
                        <Image source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            style={{ width: 35, height: 35, borderRadius: 100 }} />
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "purple" }}>Otrixweb</Text>

                        <TouchableOpacity onPress={() => { }}>
                            <Icon name="heart-o" size={20} color={"red"} />
                        </TouchableOpacity>

                    </Flex>
                </Box>
                <Box bg="white" p="0" borderColor={"black"} borderWidth={1} borderRadius={5} m="5">
                    <Flex flexDirection={"row"} justifyContent={"center"} alignItems={"center"} pl="5">
                        <Icon name="search" size={15} color={"gray"} />
                        <Input mx="3" placeholder="Search Products" borderWidth={0} />
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default HomNav