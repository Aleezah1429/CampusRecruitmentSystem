import { Image, Button, Text, View } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function StudentProfile(props) {
  const [info,setinfo]=useState([]);
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@STUDENT');
          console.log(jsonValue)
          global.result = JSON.parse(jsonValue);
          console.log(global.result.Name) 
          setinfo(global.result)
        } catch(e) {
          console.log(e)
        } 
      }
      getData();

    return (

        <View style={{ backgroundColor: '#cce6ff', width: "100%",  }}>
          {console.log(global.result)}
            <Image source={{uri:"https://cdn.iconscout.com/icon/free/png-512/graduate-student-2130830-1794975.png"}} style={{ width: "60%", height: 200, marginLeft: 70,marginBottom:50,marginTop:30, borderWidth:5, borderColor: '#000080',}} />
            <View style={{backgroundColor:'#cce6ff',bottom:30,padding:30}}>
                <Text style={{ color: '#000080', fontSize: 30, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Name : {JSON.stringify(info.Name)}</Text>
                <Text style={{ color: '#000080', fontSize: 30, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Email : {JSON.stringify(info.Email)}</Text>
                <Text style={{ color: '#000080', fontSize: 30, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Qualification : {JSON.stringify(info.Qualification)}</Text>
                <Text style={{ color: '#000080', fontSize: 30, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Department : {JSON.stringify(info.Department)}</Text>
                <Text style={{ color: '#000080', fontSize: 30, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Age : {JSON.stringify(info.Age)}</Text>
            <Text></Text>
            </View>
        </View>
    );
}

export default StudentProfile