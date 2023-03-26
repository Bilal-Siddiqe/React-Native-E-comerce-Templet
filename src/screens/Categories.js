import { Text, ScrollView } from 'react-native'
import { NativeBaseProvider } from "native-base";
import React from 'react'
import Footer from '../components/Footer';
import CategoryItems from '../components/CategoriesScreen/CategoryItems';



const Categories = ({ navigation }) => {
    return (
        <NativeBaseProvider >
            <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>Categories</Text>

            <ScrollView>
                <CategoryItems navg={() => { navigation.navigate('Trending') }} />
            </ScrollView>

            <Footer />
        </NativeBaseProvider >
    )
}

export default Categories