// // import { StyleSheet, Text, View, ViewBase } from 'react-native';
// // import React from 'react'
// // import HomeScreen from './src/screens/HomeScreen';
// // export default function App() {
// //   return (

// //     <View style={{ flex: 1 }}>

// //       <HomeScreen />








// //     </View>


// //   )
// // }

// // const styles = StyleSheet.create({})
// import { StyleSheet, Text, View, Button, Image } from 'react-native'
// import React, { useState } from 'react'
// import { FontSize } from './GlobalStyles'
// import { FlatList, TextInput } from 'react-native-gesture-handler';

//  const App = () => {

//  const users = [
//    {
//      id: 1,
//      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRzHHirDMQU_v0RHsILVKVt2O2RzpYR_EA_wiH5XaZQiOO_SBqb_8clGzD2cNXMTFoB0&usqp=CAU'
//    },
//    {
//       id: 2,
//       uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRzHHirDMQU_v0RHsILVKVt2O2RzpYR_EA_wiH5XaZQiOO_SBqb_8clGzD2cNXMTFoB0&usqp=CAU'
//     },
//     {
//       id: 3,
//       uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRzHHirDMQU_v0RHsILVKVt2O2RzpYR_EA_wiH5XaZQiOO_SBqb_8clGzD2cNXMTFoB0&usqp=CAU'
//     },
//     {
//       id: 4,
//       uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRzHHirDMQU_v0RHsILVKVt2O2RzpYR_EA_wiH5XaZQiOO_SBqb_8clGzD2cNXMTFoB0&usqp=CAU'
//     },

//   ]

//   const ImageItem = ({ item }) => (
//     <View style={{ margin: 10 }}>
//       <Image source={{ uri: item.uri }} style={{ width: 100, height: 100 }} />
//     </View>
//   );












//   const [data, setData] = useState(20);
//   const [name, setName] = useState('muzamil');
//   const [box, setBox] = useState("")
//   const change = () => {
//     setName('zain')

//   }
//   const fruit = () => {
//     setData(40)
//     console.warn(data)

//   }
//   const cleared = () => {
//     setBox("")
//   }
//   const textchng = (anything: React.SetStateAction<string>) => {
//     setBox(anything)
//   }
//   return (

//     <View>

//       <FlatList
//         data={users}
//         renderItem={ImageItem}
//       />

//       <Userinfo kuchbhi={name} />
//       <Text style={{ fontSize: 30 }}>your name:{box}</Text>
//       <TextInput
//         style={styles.textInput}
//         placeholder='Enter your name'
//         value={box}
//         onChangeText={textchng}
//       />
//       <Button title='clear' onPress={cleared}></Button>
//       <Text style={{ fontSize: 30 }}>{data}</Text>
//       <Button title="Press here" onPress={fruit} />
//       <Button title="Press here" onPress={change} />
//       <Userdata />
//     </View>
//   );
// }
// const Userdata = () => {
//   const [kata, setKata] = useState(10)
//   const biton = () => {
//     setKata(60)
//     console.warn(kata)
//   }
//   return (
//     <View>
//       <Text style={{ fontSize: 20 }}>{kata}</Text>
//       <Text style={{ fontSize: 20 }}>email=doerz@gmail.com</Text>
//       <Button title="Press here" onPress={biton} />
//     </View>
//   )
// };
// const Userinfo = (props) => {
//   const [zain, setZain] = useState("")
//   const [password, setPassword] = useState("")
//   const [email, setEmail] = useState("")
//   const [display, setDisplay] = useState(false)
//   const [icon, setIcon] = useState(true)
//   const batan = () => {

//   }


//   const clearing = () => {

//     setDisplay("false")
//     setZain("")
//     setEmail("")
//     setPassword("")
//   }

//   console.warn(props)
//   return (

//     <View>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter your name"
//         onChangeText={(text) => setZain(text)}
//         value={zain}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder='Enter your password'
//         secureTextEntry={true}
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder='Enter your email'
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//       />

//       <Button title='Clear' onPress={clearing} />
//       <Button title='Enter' onPress={() => setDisplay(true)} />
//       {
//         display ?
//           <View>
//             <Text>your name is: {zain} </Text>
//             <Text>your password is: {password} </Text>
//             <Text>your email is: {email} </Text>
//           </View> : null


//       }
//       <Text style={{ fontSize: 20 }}>Your name is:</Text>
//       <Text style={{ fontSize: 20 }}>{props.kuchbhi}</Text>
//       <Text style={{ fontSize: 20 }}>email=doerz@gmail.com</Text>
//     </View>
//   )
// };

// export default App

// const styles = StyleSheet.create({
//   textInput: {
//     fontSize: 10,
//     borderColor: 'red',
//     borderWidth: 5,
//     margin: 5,
//   },
//   flatlist: {

//     fontSize: 20,
//     color: 'white',
//     backgroundColor: 'blue',


//   },

// })



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Wrapper /> */}
      {/* <ImageGrid /> */}
      <HomeScreen />
    </View>

  )
}

export default App

const styles = StyleSheet.create({})