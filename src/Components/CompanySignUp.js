import * as React from 'react';
import { View, Text, Button, TextInput, } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CompanySignUp(props) {
  const Type = "Company"
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [JobName, setJobName] = useState("");
  const [Salary, setSalary] = useState("");
  const [JobDescription, setJobDescription] = useState("");
  const [Experience, setExperience] = useState("");
  const save_data = () => {
    database().ref(`/Company/`).push({ Name, Email, Password, CompanyName, JobName, Salary, JobDescription, Experience })
    const value={Name, Email, Password, CompanyName, JobName, Salary, JobDescription, Experience }
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@COMPANY', jsonValue)
      } catch (e) {
        console.log("error")
        // saving error
      }
    }
    storeData(value)
    props.navigation.navigate("CompanyLogin")
    }
  

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#cce6ff' }}>
        <View>
          <Text style={{ fontSize: 40, color: '#000080', fontWeight: 'bold', bottom:11 }}>Company SignUp</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 1 }}>
          <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 1 }}>
          <TextInput value={Email} onChangeText={(e) => setEmail(e)} placeholder="Email" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 1 }}>
          <TextInput secureTextEntry={true} value={Password} onChangeText={(e) => setPassword(e)} placeholder="Password" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 1 }}>
          <TextInput value={CompanyName} onChangeText={(e) => setCompanyName(e)} placeholder="Company Name" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 1 }}>
          <TextInput value={JobName} onChangeText={(e) => setJobName(e)} placeholder="Job Name" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 1 }}>
          <TextInput value={JobDescription} onChangeText={(e) => setJobDescription(e)} placeholder="Job Description" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 1 }}>
          <TextInput value={Salary} onChangeText={(e) => setSalary(e)} placeholder="Salary" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#000080", width: "80%", margin: 1 }}>
          <TextInput value={Experience} onChangeText={(e) => setExperience(e)} placeholder="Experience" />
        </View>
        <View>
          <View style={{ width: 150 }}>
            <Button color="#000080" style={{ fontSize: 30 }} onPress={() => save_data()} title="Signup"></Button>
          </View>
          
        </View>

      </View>
  );
}

export default CompanySignUp;

