import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function StudentSignUp(props) {
  const Type="Student"
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Qualification, setQualification] = useState("");
  const [Department, setDepartment] = useState("");
  const [Age, setAge] = useState("");
  const save_data=()=>{
    database().ref(`/Student/`).push({Name, Email , Password ,Qualification, Department, Age})
    const value={Name, Email , Password ,Qualification, Department, Age}
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@STUDENT', jsonValue)
      } catch (e) {
        console.log("error")
        // saving error
      }
    }
    storeData(value)
    props.navigation.navigate("StudentLogin")
    }  
  

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#cce6ff'}}>
      <View>
        <Text style={{ fontSize: 50, color: '#000080', fontWeight: 'bold',marginBottom:10 }}>Student SignUp</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 5 }}>
        <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{borderWidth:3,borderColor:"#000080",width:"80%", margin:5}}>
        <TextInput value={Email} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 5 }}>
        <TextInput secureTextEntry={true} value={Password} onChangeText={(e) => setPassword(e)} placeholder="Password" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 5 }}>
        <TextInput value={Qualification} onChangeText={(e) => setQualification(e)} placeholder="Qualification" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 5 }}>
        <TextInput  value={Department} onChangeText={(e) => setDepartment(e)} placeholder="Department" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 5 }}>
        <TextInput  value={Age} onChangeText={(e) => setAge(e)} placeholder="Age" />
      </View>
    <View>
      <View style={{marginTop:10, width:150}}>
      <Button  color = "#000080" style={{fontSize:30}} onPress={()=>save_data()} title="Signup"></Button>
      </View>
    </View>
    
    </View>
  );
}

export default StudentSignUp;

