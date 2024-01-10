import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";

function Viewdetails() {
    const vehicleData = [
        {
        vehicleNumber: '13X27DCR',
        truckType: '3ton Reefer',
        driverName: 'azfen',
        mobileNumber: '9876632647',
        location: 'https://www.google.com/maps?q=latitude,longitude',
        image: require('../../assets/truck.png'),
        forLease: true, 
        condition: 'Good', 
        year: 2022, 
        make: 'Toyota', 
        model: 'ReeferPro', 
        mileage: '25,000 miles', 
        fuelType: 'Diesel', 
        price: '$50,000', 
        insurance: true, 
        },
    ];

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
        <Text style={{ fontSize: 18, marginLeft:0, color: 'black', fontWeight: 'bold', marginTop: 10 }}>Additional Vehicle Information </Text>
        <View style={{ marginTop: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Make: </Text>
            <Text>{item.make}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Model: </Text>
            <Text>{item.model}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Mileage: </Text>
            <Text>{item.mileage}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Fuel Type: </Text>
            <Text>{item.fuelType}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Price: </Text>
            <Text>{item.price}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Condition: </Text>
            <Text>{item.condition}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>For Lease: </Text>
            <Text>{item.forLease ? 'Yes' : 'No'}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Insurance: </Text>
            <Text>{item.forLease ? 'Yes' : 'No'}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Year: </Text>
            <Text>{item.year}</Text>
        </View>
        </View>
    </View>
    );

    return (
        <View style={{ flex: 1, marginTop: 30, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginTop: 10, color: 'black' }}>VEHICLE INFORMATION</Text>
            </View>
            <FlatList
                data={vehicleData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export default Viewdetails;
