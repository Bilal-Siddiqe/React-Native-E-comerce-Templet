import { Image, ScrollView, View } from "react-native";
import { NativeBaseProvider, Text, Box, Flex, Input, AspectRatio, Center, Stack, Heading, HStack } from "native-base";
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"

const ProductCards = (props) => {
    return (
        <>
            <Box alignItems="center" style={{ color: "black", marginTop: 20 }}>

                {/* This is card */}
                <Box maxW="40" rounded="lg" borderColor="coolGray.200" mx="2" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>

                    <Box>
                        {/* Image of Card */}
                        <AspectRatio w="100%" ratio={8 / 6}>
                            <Image source={{
                                uri: `${props.url}`
                            }} alt="image" borderRadius={3} />
                        </AspectRatio>

                        {/* Tags on Card Image */}
                        <Center bg="blueGray.300" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "black",
                            fontWeight: "700",
                            fontSize: 10
                        }} position="absolute" top="2" left="2" px="2" py="1" borderRadius={5} >
                            New
                        </Center>

                        <Center bg="darkBlue.300" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: 8
                        }} position="absolute" top="2" right="2" px="1" py="1" borderRadius={100} w={6} h={6}>
                            <Icon name="heart" size={12} color={"white"} />
                        </Center>
                    </Box>

                    {/* Card Product Name Description & Pricing */}
                    <Stack p="4" space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1" onPress={props.navg}>
                                Joger
                            </Heading>

                            <Flex flexDirection={"row"}>
                                <Icon name="star" size={15} color={"orange"} />
                                <Icon name="star" size={15} color={"orange"} />
                                <Icon name="star" size={15} color={"orange"} />
                                <Icon name="star" size={15} color={"orange"} />
                                <Icon name="star-half-full" size={15} color={"orange"} />
                            </Flex>


                            <Text fontSize="xs" _light={{
                                color: "violet.500"
                            }} _dark={{
                                color: "violet.400"
                            }} fontWeight="300" ml="-0.5" mt="-1" style={{ color: "black" }}>
                                The Youngs Style
                            </Text>
                            <View>
                                <Heading size="sm" ml="-1">
                                    $350
                                </Heading>
                            </View>
                        </Stack>
                    </Stack>

                </Box>

            </Box>
        </>
    )
}

export { ProductCards };