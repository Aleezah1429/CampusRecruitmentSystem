import React from 'react';
import { View, Text, Button, Image } from 'react-native';

function AdminPage(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#cce6ff', }}>

            <Text style={{ fontSize: 40, color: '#000080', fontWeight: 'bold', marginBottom: 20 }}>Welcome Admin</Text>
            <Image source={{ uri: "https://iwfstaff.com.au/wp-content/uploads/2017/12/Office-Admin-Icon.png" }} style={{ width: "70%", height: 200, marginBottom: 40, marginTop: 20, borderWidth: 8, borderColor: '#000080', }} />
            <View style={{ marginTop: 20, width: 150 }}>
                <Button color="#000080" style={{ fontSize: 25 }} onPress={() => props.navigation.navigate("StudentInfo")} title="Students Information"></Button>
            </View>
            <View style={{ marginTop: 20, width: 150 }}>
                <Button color="#000080" style={{ fontSize: 25 }} onPress={() => props.navigation.navigate("CompanyInfo")} title="Companies Information"></Button>
            </View>

        </View>
    )
}


export default AdminPage;