import * as React from 'react';
import { View, Text, Button} from 'react-native';


function StudentPage(props) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#cce6ff' }}>
      <View>
        <Text style={{ fontSize: 50, color: '#000080', fontWeight: 'bold', marginBottom: 30 }}>Student Page</Text>
      </View>
      <View>
        <View style={{ marginTop: 20, width: 150 }}>
          <Button color="#000080" style={{ fontSize: 30 }} onPress={() => props.navigation.navigate("StudentProfile")} title="Profile"></Button>
        </View>
        <View style={{ marginTop: 20, width: 150 }}>
          <Button color="#000080" style={{ fontSize: 30 }} onPress={() => props.navigation.navigate("CompanyInfo")} title="Company Information"></Button>
        </View>
      </View>
    </View>
  );
}

export default StudentPage;

