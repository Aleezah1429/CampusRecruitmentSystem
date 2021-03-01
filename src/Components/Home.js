import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-recruitment-looking-for-a-bull-poster-background-image_200940.jpg" };

const Home = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Text style={{color:'#000080', fontWeight: 'bold', fontSize:50, textAlign:'center', bottom:80}}>Campus Recruitment System</Text>
      <Text onPress={()=>props.navigation.navigate("StudentLogin")} style={styles.text}>Student</Text>
      <Text onPress={()=>props.navigation.navigate("CompanyLogin")} style={styles.text}>Company</Text>
      <Text onPress={()=>props.navigation.navigate("AdminLogin")}style={styles.text}>Admin</Text>
    </ImageBackground>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height:'100%',
    width:'100%'
  },
  text: {
    color: "#000080",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    bottom:55,
    backgroundColor: "#cce6ff",
    borderWidth:5,
    borderColor:'#000080',
    width:200,
    margin:5,
    borderRadius:30,
    left:80
  }
});

export default Home;