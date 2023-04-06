import React from 'react'
import { Image } from "react-native";
import { Text, Box, Flex, Input } from "native-base";

const HomNav = () => {
    return (
        <>

            <Box bg="white" pt='3' pb='1'>
                <Flex direction="row" justifyContent='space-between' alignItems='center' px="5" >
                    <Image source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={{ width: 35, height: 35, borderRadius: 100 }} />
                    <Text style={{fontSize:20, fontWeight:"bold", color:"purple"}}>Otrixweb</Text>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbLAedxJInRn8rGFYyxHCJz4bHQaygxDFMw&usqp=CAU' }}
                        style={{ width: 20, height: 20 }} />
                </Flex>
            </Box>
            <Box bg="white" p="2">
                <Input mx="3" placeholder="Search Products" bgColor={"blueGray.100"} />
            </Box>
        </>
    )       
}

export default HomNav