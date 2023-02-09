import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface RenderTextprop {
    name: any
}

const Individual = ({ name }: RenderTextprop) => {
    return (

        <View style={styles.item}>
            <Text style={{ color: 'white' }}>{name}</Text>
        </View>
    )
}

export default Individual

const styles = StyleSheet.create({
    item: {

        backgroundColor: 'red',
        // padding: 20,
        width: "auto",
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 8,



    },
})