import React,{ useState } from 'react';
import { View, Text, Button, TextInput, } from 'react-native';
import database from "@react-native-firebase/database";

function AdminLogin(props) {
  const verify=()=>{
    database().ref('/Admin/').once('value').then(snapshot => {
    const check=snapshot.val()
    if(check.user.Name===Name && check.user.Password===Password){
      console.log("You are the Admin")
      props.navigation.navigate("AdminPage")
    }
})}

    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#cce6ff' }}>
        <View>
          <Text style={{ fontSize: 50, color: '#000080', fontWeight: 'bold', marginBottom:20 }}>Admin Login</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 20 }}>
          <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 20 }}>
          <TextInput secureTextEntry={true} value={Password} onChangeText={(e) => setPassword(e)} placeholder="Password" />
        </View>
        <View style={{ margin: 20, width: 110}}>
          <Button color="#000080" onPress={()=>verify()}  title="Login"></Button>
        </View>
        <View style={{ margin: 20, width: 110}}>
          <Button color="#000080" onPress={()=>props.navigation.navigate('AdminSignUp')}  title="SignUp"></Button>
        </View>
        </View>
    )
}
    

export default AdminLogin;