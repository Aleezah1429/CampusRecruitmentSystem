import React,{ useState } from 'react';
import { View, Text, Button, TextInput,} from 'react-native';
import database from "@react-native-firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage'

function StudentLogin(props) {
  global.DATA=[]
  var keyss=[]
  database().ref('/Student').once("value").then(snapshot=>{
      var result = snapshot.val();
      var keys=Object.entries(result)
      for (var i=0;i<keys.length;i++){
          keyss.push(keys[i][1])
      }
      for (var i=0;i<keyss.length;i++){
        global.DATA.push(Object.values(keyss[i]))
    }
      console.log(global.DATA)
  })

  const verify=()=>{
    for (var i=0;i<global.DATA.length;i++){
        if(global.DATA[i][0]==Password && global.DATA[i][1]==Name){
            console.log("found Company")
            props.navigation.navigate("StudentPage")
        }
  }
  getData();
  }
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@STUDENT');
      console.log(jsonValue)
      global.result = JSON.parse(jsonValue);
      console.log(global.result) 
    } catch(e) {
      console.log(e)
    } 
  }
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white", backgroundColor:'#cce6ff' }}>
      <View>
        <Text style={{ fontSize: 50, color: '#000080', fontWeight: 'bold' }}>Student Login</Text>
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
        <Button color="#000080" onPress={()=>props.navigation.navigate('StudentSignUp')}  title="SignUp"></Button>
      </View>
      </View>
    )
}
 
    

export default StudentLogin;