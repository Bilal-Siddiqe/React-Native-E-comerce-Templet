import { Text, ScrollView } from 'react-native'
import { NativeBaseProvider } from "native-base";
import React from 'react'
import Footer from '../components/Footer';
import CategoryItems from '../components/CategoriesScreen/CategoryItems';



const Categories = () => {
    return (
        <NativeBaseProvider >
            <Text style={{ backgroundColor: "white", color: "black", paddingLeft: 25, paddingTop: 20, fontWeight: "bold", fontSize: 18, paddingBottom: 10 }}>Categories</Text>

            <ScrollView>
               <CategoryItems/>
            </ScrollView>
            
            <Footer/>
        </NativeBaseProvider >
    )
}

export default Categories