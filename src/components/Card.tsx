import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import RenderImage from './RenderImage';
const imageData = [
  { id: 1, img: require('../../assets/fonts/pexels-pixabay-268533.jpg',) },
  { id: 2, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 3, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 4, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 5, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 6, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 7, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 8, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 9, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 10, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 11, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 12, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 13, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 14, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 15, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },
  { id: 16, img: require('../../assets/fonts/pexels-pixabay-268533.jpg') },

];

const numColumns = 3;



const ImageGrid = () => {


  return (
    <View style={{ marginTop: 229 }}>
      <FlatList
        data={imageData}
        renderItem={({ item }) => <RenderImage img={item.img} />}
        numColumns={numColumns}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const style = StyleSheet.create({
  // component12Child: {
  //       top: "0%",
  //       right: "0%",
  //       bottom: "0%",
  //       left: "0%",
  //       borderRadius: Border.br_xs,
  //       height: "100%",
  //       maxHeight: "100%",
  //       maxWidth: "100%",
  //       position: "absolute",
  //       overflow: "hidden",
  //       width: "100%",
  //     },

})

export default ImageGrid;