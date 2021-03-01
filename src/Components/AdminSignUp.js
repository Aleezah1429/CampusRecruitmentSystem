import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function AdminSignUp(props) {
  const Type="Admin"
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const save_data=()=>{
    let user={
        Name, Email , Password
    }
    database().ref(`/Admin/`).update({user})
    props.navigation.navigate("AdminLogin")
    }
 

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#cce6ff'}}>
      <View>
        <Text style={{ fontSize: 50, color: '#000080', fontWeight: 'bold',marginBottom:10 }}>Admin 
        SignUp</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 10 }}>
        <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{borderWidth:3,borderColor:"#000080",width:"80%", margin:10}}>
        <TextInput value={Email} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 10 }}>
        <TextInput secureTextEntry={true} value={Password} onChangeText={(e) => setPassword(e)} placeholder="Password" />
      </View>
    <View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "#000080" style={{fontSize:30}} onPress={()=>save_data()} title="Signup"></Button>
      </View>
    </View>
    
    </View>
  );
}

export default AdminSignUp;

