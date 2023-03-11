import { Image, ScrollView, View } from "react-native";
import { NativeBaseProvider, Text, Box, Flex, Input, AspectRatio, Center, Stack, Heading, HStack } from "native-base";
import React from 'react'

const ProductCards = (props) => {
    return (
        <>
            <Box alignItems="center" style={{ color: "black", marginTop:20}}>
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
                        <AspectRatio w="100%" ratio={8 / 6}>
                            <Image source={{
                                uri: `${props.url}`
                            }} alt="image" />
                        </AspectRatio>
                        <Center bg="violet.500" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: 10
                        }} position="absolute" bottom="0" px="1" py="1">
                            PHOTOS
                        </Center>
                    </Box>
                    <Stack p="4" space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                Joger
                            </Heading>
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




export  {ProductCards};