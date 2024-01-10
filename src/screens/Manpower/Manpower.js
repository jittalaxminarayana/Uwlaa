import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Manpower() {
    const navigation = useNavigation();
    const vehicleData = [
        {
            vehicleNumber: '13X27DCR',
            truckType: '3ton Reefer',
            driverName: 'azfen',
            mobileNumber: '9876632647',
            location: 'https://www.google.com/maps?q=latitude,longitude',
            image: require('../../assets/manpower.png'),
            amount: '13500',
        },
        {
            vehicleNumber: '13E5GDK',
            truckType: '3ton Reefer',
            driverName: 'raghul',
            mobileNumber: '9876675775',
            location: 'Unnamed Location',
            image: require('../../assets/manpower.png'),
            amount: '12500',

        },
        {
            vehicleNumber: '13E5GDK',
            truckType: 'heavy transport',
            driverName: 'john',
            mobileNumber: '9876675775',
            location: 'https://www.google.com/maps?q=40.7128,-74.0060',
            image: require('../../assets/manpower.png'),
            amount: '13800',
        },
        {
            vehicleNumber: '31E5GDL',
            truckType: 'heavy transport',
            driverName: 'Smith',
            mobileNumber: '9876675775',
            location: 'https://www.google.com/maps?q=40.7128,-74.0060',
            image: require('../../assets/manpower.png'),
            amount: '13800',
        },
        {
            vehicleNumber: '13E5GDK',
            truckType: 'light transport',
            driverName: 'Mic',
            mobileNumber: '9876675775',
            location: 'https://www.google.com/maps?q=40.7128,-74.0060',
            image: require('../../assets/manpower.png'),
            amount: '13800',
        },
    ];
    const navigateToDetails = () => {
        navigation.navigate('Viewdetails'); 
    }

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'column', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Vehicle Number: {item.vehicleNumber}</Text>
                    <Text>Truck Type: {item.truckType}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <Image source={require('../../assets/driver.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                <Text style={{ fontWeight: 'bold' }}>Driver: </Text>
                <Text>{item.driverName}</Text>
                <Text style={{ marginLeft: 120, fontWeight: 'bold' }} >{item.amount} د.إ</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <Image source={require('../../assets/call.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                <Text style={{ fontWeight: 'bold' }}>Mobile Number: </Text>
                <Text>{item.mobileNumber}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <Image source={require('../../assets/location.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                <Text style={{ fontWeight: 'bold' }}>Location: </Text>
                <Text>{item.location}</Text>
            </View>
            <TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }} onPress={navigateToDetails}>
                <Text style={{ color: 'red', textAlign: 'center' }}>View Details</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1, marginTop: 30, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 10, color: 'black' }}>Manpower</Text>
                <Text style={{ fontWeight: 'bold', marginRight: 10 }}>21</Text>
            </View>
            <FlatList
                data={vehicleData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
export default Manpower;
