import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Individual from './Individual'

const button = [
    {
        id: 1,
        name: 'Videographer'
    },
    {
        id: 2,
        name: 'Gamer'
    },
    {
        id: 3,
        name: 'Entertainment'
    }

];
const Batan = () => {
    return (
        <View style={{ backgroundColor: "green" }}>

            <FlatList
                data={button}
                renderItem={({ item }) => <Individual name={item.name} />}
                showsHorizontalScrollIndicator={false} />

        </View>
    );
}

export default Batan;