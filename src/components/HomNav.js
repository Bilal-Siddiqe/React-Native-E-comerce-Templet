import React from 'react'
import { Image } from "react-native";
import { Text, Box, Flex, Input } from "native-base";

const HomNav = () => {
    return (
        <>

            <Box bg="white" pt='3' pb='1'>
                <Flex direction="row" justifyContent='space-around' alignItems='center' >
                    <Image source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={{ width: 30, height: 35, borderRadius: 100 }} />
                    <Text>Otrixweb</Text>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbLAedxJInRn8rGFYyxHCJz4bHQaygxDFMw&usqp=CAU' }}
                        style={{ width: 25, height: 25 }} />
                </Flex>
            </Box>
            <Box bg="white" p="2">
                <Input mx="3" placeholder="Search Products" />
            </Box>
        </>
    )       
}

export default HomNav