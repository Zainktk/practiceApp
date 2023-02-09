import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"
import React from 'react'

interface RenderImageProp {
    img: any,
}
const RenderImage = ({ img }: RenderImageProp) => {
    return (
        <View style={{ flex: 1 }}>
            <View >
                <Image source={img} style={{ flex: 1, height: 136, width: 116, borderRadius: 5, }} />
            </View>
            <View style={{ justifyContent: "flex-end", flexDirection: "row", alignItems: "center", }}>
                <Image source={require("../../assets/fonts/pexels-pixabay-268533.jpg")} style={{ height: 20, width: 20, borderRadius: 40, marginRight: 10, }} />
            </View>
            <View>

            </View>
        </View >
    );
};

export default RenderImage

const styles = StyleSheet.create({

})