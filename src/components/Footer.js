import React from 'react'
import { TouchableOpacity } from "react-native";
import { Box, Flex } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import IconF from "react-native-vector-icons/Feather"
import IconF5 from "react-native-vector-icons/FontAwesome5"


const Footer = () => {

  let iconSizeCart = 30;
  let iconClrCart = "purple";
  let iconSize = 25;
  let iconClr = "black";


  return (
    <>

      <Box bg="white">
        <Flex justifyContent={"center"} alignItems='center' mb={-4}>
          <Box justifyContent={"center"} alignItems='center' pt="1" borderColor={"red"} borderRadius={100} w={10} h={10} bg={"gray.100"}>
            <TouchableOpacity onPress={() => { }}>
              <Icon name="cart-plus" size={iconSizeCart} color={iconClrCart} />
            </TouchableOpacity>
          </Box>
        </Flex>

        <Flex direction="row" justifyContent='space-between' alignItems='center' py="1" px="5">
        
          <TouchableOpacity onPress={() => { }}>
            <Icon name="home" size={iconSize} color={iconClr} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <IconF name="command" size={iconSize} color={iconClr} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <IconF5 name="mandalorian" size={iconSize} color={iconClr} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <IconF name="settings" size={iconSize} color={iconClr} />
          </TouchableOpacity>

        </Flex>

      </Box>

    </>
  )
}

export default Footer;