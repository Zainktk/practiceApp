import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import PreviewComponent from '../components/PreviewComponent'


const NewScreen = () => {
    const array = [
        {
            id: "1",
            source: require("../../assets/ellipse-12.png"),
            title: "Img1",
            des: "What evere"
        },
        {
            id: "2",
            img: "../../assets/ellipse-12.png",
            title: "Img2",
            des: "What evere"
        },
        {
            id: "3",
            img: "../../assets/ellipse-12.png",
            title: "Img3",
            des: "What evere"
        },
        {
            id: "4",
            img: "../../assets/ellipse-12.png",
            title: "Img4",
            des: "What evere"
        },
        {
            id: "5",
            img: "../../assets/ellipse-12.png",
            title: "Img5",
            des: "What evere"
        },
        {
            id: "6",
            img: "../../assets/ellipse-12.png",
            title: "Img6",
            des: "What evere"
        },
    ]
    return (
        <SafeAreaView>
            <FlatList
                data={array}
                renderItem={({ item }) => <PreviewComponent img={item.img} title={item.title} des={item.des} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default NewScreen

const styles = StyleSheet.create({})