// import * as React from "react";
// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   Pressable,
//   ImageBackground,
//   ScrollView
// } from "react-native";
// import {
//   Margin,
//   Color,
//   FontFamily,
//   FontSize,
//   Border,
//   Padding,
// } from "../../GlobalStyles";

// const HomeScreen = () => {

//   return (
//     <View style={styles.homeScreen}>

//       <Pressable
//         style={styles.wrapper}
//         onPress={() => console.log("Pressed")}
//       >
//         <Image
//           style={styles.iconLayout}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-12.png")}
//         />
//       </Pressable>
//       <Text style={styles.hiJhonatan}>Hi, Jhonatan</Text>
//       <Pressable
//         style={[styles.component12, styles.componentLayout]}
//         onPress={() => console.log("Pressed")}
//       >
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-493.png")}
//         />

//         <Text
//           style={[styles.dianaSmith, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Pressable
//           style={[styles.itemPosition, styles.containerPosition]}
//           onPress={() => console.log("Pressed")}
//         >
//           <Image
//             style={[styles.iconLayout, styles.itemLayout]}
//             resizeMode="cover"
//             source={require("../../assets/ellipse-13.png")}
//           />
//         </Pressable>
//         <Image
//           style={[styles.vectorIcon, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </Pressable>
//       <View style={[styles.component15, styles.componentPosition3]}>
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-496.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </View>
//       <View style={[styles.component21, styles.componentPosition2]}>
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-497.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </View>
//       <View style={[styles.component18, styles.componentPosition1]}>
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-498.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </View>
//       <ImageBackground
//         style={[styles.iconPosition, styles.componentLayout]}
//         resizeMode="cover"
//         source={require("../../assets/component13.png")}
//       >
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-494.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </ImageBackground>
//       <ImageBackground
//         style={[styles.iconPosition, styles.componentPosition3]}
//         resizeMode="cover"
//         source={require("../../assets/component13.png")}
//       >
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-499.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </ImageBackground>
//       <ImageBackground
//         style={[styles.iconPosition, styles.componentPosition2]}
//         resizeMode="cover"
//         source={require("../../assets/component13.png")}
//       >
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-4910.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </ImageBackground>
//       <ImageBackground
//         style={[styles.iconPosition, styles.componentPosition1]}
//         resizeMode="cover"
//         source={require("../../assets/component13.png")}
//       >
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-4911.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </ImageBackground>
//       <View style={[styles.component14, styles.componentLayout]}>
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-495.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </View>
//       <View style={[styles.component17, styles.componentPosition3]}>
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-4912.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </View>
//       <View style={[styles.component25, styles.componentPosition2]}>
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-4913.png")}
//         />

//         <Image
//           style={[
//             styles.itemPosition,
//             styles.containerPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </View>
//       <View style={[styles.component20, styles.componentPosition1]}>
//         <Image
//           style={styles.component12Child}
//           resizeMode="cover"
//           source={require("../../assets/rectangle-4914.png")}
//         />

//         <Image
//           style={[
//             styles.component15Item,
//             styles.itemPosition,
//             styles.itemLayout,
//           ]}
//           resizeMode="cover"
//           source={require("../../assets/ellipse-13.png")}
//         />
//         <Text
//           style={[styles.dianaSmith1, styles.dianaTypo, styles.dianaPosition]}
//         >
//           Diana Smith
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../../assets/vector6.png")}
//         />
//       </View>




//       <View style={[styles.charmfilterParent, styles.parentLayout]}>
//         <Pressable
//           style={[styles.charmfilter, styles.charmfilterLayout]}
//           onPress={() => console.log("Pressed")}
//         >
//           <Image
//             style={[styles.icon5, styles.iconLayout]}
//             resizeMode="cover"
//             source={require("../../assets/charmfilter.png")}
//           />
//         </Pressable>
//         <Text style={[styles.radius25Miles, styles.makeupArtistTypo]}>
//           Radius(25 miles|)
//         </Text>
//         <View style={[styles.frame, styles.parentLayout]}>

//           <View style={[styles.videographerParent, styles.parentSpaceBlock]}>
//             <Text style={styles.makeupArtistTypo}>Videographer</Text>
//             <Image
//               style={[styles.fluentEmojiHighContrastcroIcon, styles.ml10]}
//               resizeMode="cover"
//               source={require("../../assets/fluentemojihighcontrastcrossmark2.png")}
//             />
//           </View>
//           <View style={[styles.gamerParent, styles.parentSpaceBlock]}>
//             <Text style={styles.makeupArtistTypo}>Gamer</Text>
//             <Image
//               style={[styles.fluentEmojiHighContrastcroIcon, styles.ml10]}
//               resizeMode="cover"
//               source={require("../../assets/fluentemojihighcontrastcrossmark2.png")}
//             />
//           </View>
//           <View
//             style={[
//               styles.entertainmentParent,
//               styles.parentSpaceBlock,
//               styles.parentPosition,
//             ]}
//           >
//             <Text style={styles.makeupArtistTypo}>Entertainment</Text>
//             <Image
//               style={[styles.fluentEmojiHighContrastcroIcon, styles.ml10]}
//               resizeMode="cover"
//               source={require("../../assets/fluentemojihighcontrastcrossmark1.png")}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   ml10: {
//     marginLeft: Margin.m_sm,
//   },
//   itemLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   componentLayout: {
//     height: 136,
//     width: 116,
//     top: 229,
//     position: "absolute",
//   },
//   dianaTypo: {
//     letterSpacing: 0,
//     fontSize: FontSize.size_2xs,
//     textAlign: "left",
//     color: Color.white,
//     fontFamily: FontFamily.poppins,
//     position: "absolute",
//   },
//   dianaPosition: {
//     top: "83.09%",
//     width: "53.45%",
//     letterSpacing: 0,
//     fontSize: FontSize.size_2xs,
//   },
//   containerPosition: {
//     left: "76.72%",
//     height: "16.18%",
//     width: "18.97%",
//     bottom: "3.68%",
//     right: "4.31%",
//   },
//   vectorIconLayout: {
//     bottom: "7.48%",
//     top: "84.9%",
//     width: "10.04%",
//     height: "7.61%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   componentPosition3: {
//     top: 366,
//     height: 136,
//     width: 116,
//     position: "absolute",
//   },
//   itemPosition: {
//     height: "16.18%",
//     width: "18.97%",
//     bottom: "3.68%",
//     top: "80.15%",
//     position: "absolute",
//   },
//   componentPosition2: {
//     top: 640,
//     height: 136,
//     width: 116,
//     position: "absolute",
//   },
//   componentPosition1: {
//     top: 503,
//     height: 136,
//     width: 116,
//     position: "absolute",
//   },
//   componentPosition: {
//     top: 777,
//     height: 136,
//     width: 116,
//     position: "absolute",
//   },
//   iconPosition: {
//     left: 136,
//     borderRadius: Border.br_xs,
//   },
//   charmfilterLayout: {
//     height: 25,
//     position: "absolute",
//   },
//   parentLayout: {
//     width: 371,
//     position: "absolute",
//   },
//   iconLayout: {
//     height: "100%",
//     width: "100%",
//   },
//   makeupArtistTypo: {
//     fontWeight: "500",
//     letterSpacing: 0.1,
//     fontSize: FontSize.size_lg,
//     textAlign: "left",
//     color: Color.white,
//     fontFamily: FontFamily.poppins,
//   },
//   parentSpaceBlock: {
//     paddingVertical: Padding.p_4xs,
//     paddingHorizontal: Padding.p_xs,
//     flexDirection: "row",
//     backgroundColor: Color.red_100,
//     borderRadius: Border.br_xs,
//     position: "absolute",
//   },
//   parentPosition: {
//     top: 1,
//     paddingHorizontal: Padding.p_xs,
//     flexDirection: "row",
//     backgroundColor: Color.red_100,
//   },

//   wrapper: {
//     left: 330,
//     top: 69,
//     width: 40,
//     height: 40,
//     position: "absolute",
//   },
//   hiJhonatan: {
//     top: 68,
//     fontSize: FontSize.size_6xl,
//     letterSpacing: 0.2,
//     fontWeight: "600",
//     width: 176,
//     height: 41,
//     textAlign: "left",
//     color: Color.white,
//     fontFamily: FontFamily.poppins,
//     left: 19,
//     position: "absolute",
//   },
//   component12Child: {
//     top: "0%",
//     right: "0%",
//     bottom: "0%",
//     left: "0%",
//     borderRadius: Border.br_xs,
//     height: "100%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//     width: "100%",
//   },
//   dianaSmith: {
//     left: "6.03%",
//   },
//   vectorIcon: {
//     right: "8.77%",
//     left: "81.19%",
//   },
//   component12: {
//     left: 19,
//   },
//   component15Item: {
//     right: "5.17%",
//     left: "75.86%",
//   },
//   dianaSmith1: {
//     left: "5.17%",
//   },
//   vectorIcon1: {
//     right: "9.63%",
//     left: "80.32%",
//   },
//   component15: {
//     left: 19,
//   },
//   component21: {
//     left: 19,
//   },
//   component18: {
//     left: 19,
//   },
//   component14: {
//     left: 253,
//   },
//   component17: {
//     left: 253,
//   },
//   component25: {
//     left: 253,
//   },
//   component20: {
//     left: 253,
//   },


//   component22: {
//     left: 19,
//   },
//   homeScreenItem: {
//     top: 807,
//     left: 60,
//     width: 269,
//   },
//   icon5: {
//     overflow: "hidden",
//   },
//   charmfilter: {
//     left: 323,
//     width: 25,
//     top: 0,
//   },
//   radius25Miles: {
//     top: 2,
//     left: 0,
//     position: "absolute",
//   },
//   fluentEmojiHighContrastcroIcon: {
//     borderRadius: Border.br_md,
//     width: 20,
//     height: 20,
//     overflow: "hidden",
//   },

//   videographerParent: {
//     borderStyle: "solid",
//     borderColor: "#ff0000",
//     borderWidth: 1,
//     left: 0,
//     top: 0,
//   },
//   gamerParent: {
//     left: 176,
//     top: 0,
//   },
//   entertainmentParent: {
//     left: 303,
//   },
//   frame: {
//     top: 43,
//     height: 38,
//     left: 0,
//   },
//   charmfilterParent: {
//     top: 129,
//     height: 81,
//     left: 19,
//   },
//   homeScreen: {
//     backgroundColor: Color.gray_600,
//     flex: 1,
//     height: 844,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

// export default HomeScreen;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components'
import ImageGrid from '../components/Card'
import Batan from '../components/batan'


const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Batan />
            <ImageGrid />
        </View>
    );
}

export default HomeScreen

