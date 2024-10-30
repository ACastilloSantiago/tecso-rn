import React from "react"
import { Text} from 'react-native'
import { View } from "react-native-web"
import Header from '../components/header/Header';
import { useNavigation } from '@react-navigation/native';

const HomeMascotero = () => {
    const navigation = useNavigation(); 
    
    return (
        <View>
             <Header navigation={navigation} /> 
            <Text>
                Home protectora
            </Text>
        </View>
    )
}

export default HomeMascotero;