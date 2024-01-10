import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { Calendar } from 'react-native-calendars';

function History() {
    const vehicleData = [
        {
            vehicleNumber: '13X27DCR',
            truckType: '3ton Reefer',
            driverName: 'azfen',
            mobileNumber: '9876632647',
            location: 'https://www.google.com/maps?q=latitude,longitude',
            image: require('../../assets/truck.png'),
            bookingno: 'T453DF',
            timer:'264:45:17',
        },
        {
            vehicleNumber: '13E5GDK',
            truckType: '3ton Reefer',
            driverName: 'raghul',
            mobileNumber: '9876675775',
            location: 'Unnamed Location',
            image: require('../../assets/movers.png'),
            bookingno: 'RDG3DF',
            timer:'364:05:11',
        },
        {
            vehicleNumber: '13E5GDK',
            truckType: 'heavy transport',
            driverName: 'john',
            mobileNumber: '9876675775',
            location: 'Unnamed Location',
            image: require('../../assets/truck.png'),
            bookingno: 'MZ2451',
            timer:'164:55:21',
        },
    ];
    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'column', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 10, color: 'black' }}>Booking No:{item.bookingno}</Text>
                <Text style={{ fontWeight: 'bold', marginRight: 10, color:'red'}}>⏰{item.timer}</Text>
            </View>
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
        </View>
    );

    return (
        <View style={{ flex: 1, marginTop: 30, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderColor: 'gray', padding: 10 }}
                    placeholder="Search..."
                />
                <TouchableOpacity style={{ marginLeft: 10, padding: 10, backgroundColor: 'gray', borderRadius: 5 }}>
                    <Text style={{ color: 'white' }}>Search</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Calendar />
            </View>
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 10, color: 'black' }}>History</Text>
            </View>
            <FlatList
                data={vehicleData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
export default History;
