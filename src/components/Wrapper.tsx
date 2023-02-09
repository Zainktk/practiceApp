import { StyleSheet, Text, View, Image, } from 'react-native';
import React from 'react';

const Wrapper = () => {
  return (
    <View style={{ justifyContent: 'space-between', flexDirection: "row", marginTop: 68 }}>
      <Text style={styles.hiJhonatan}>Hi, Jhonatan</Text>
      <View >
        <Image style={{ height: 30, width: 30, borderRadius: 50, marginRight: 20 }}
          resizeMode="cover"
          source={require("../../assets/fonts/pexels-pixabay-268533.jpg")}
        />
      </View>
    </View>
  )
}

export default Wrapper;

const styles = StyleSheet.create({

  hiJhonatan: {
    fontSize: 27,
    letterSpacing: 0.2,
    fontWeight: "600",
    // width: 176,
    height: 41,
    // textAlign: "left",
    color: "white",
    // fontFamily: "poppins",
  },


})