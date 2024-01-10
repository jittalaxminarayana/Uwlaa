import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

function Profile() {
    const itemList = [
        "CUSTOMER",
        "VENDOR",
        "HR AND PAYROLL",
        "MY COMPANY ",
        "MY WALLET",
        "HOLIDAY CALENDAR",
        "FAQs",
        "CHANGE PASSWORD",
        "GIVE US fEEDBACK",
    ];
    const [username, setUsername] = useState('');
    const dynamicMarginLeft = username ? username.length * 5 : 50; 
    useEffect(() => {
        FetchUserName();
    }, []);

    const FetchUserName = async () => {
        const storedUsername = await AsyncStorage.getItem('username');
        setUsername(storedUsername);
    };


    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>

            <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 20, marginTop: 40 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/logo.jpg')}
                        style={{ width: 70, height: 70, borderRadius: 60 }}
                    />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>{username}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ borderWidth: 1, borderColor: 'maroon', paddingVertical: 1, paddingHorizontal: 8, borderRadius: 3, backgroundColor: 'white', marginRight: 90, marginLeft: 50 }}>
                        <Text style={{ fontSize: 14, color: 'maroon' }}>View Profile</Text>
                    </View>
                    <Image
                        source={require('../../assets/check.png')}
                        style={{ width: 23, height: 23, borderRadius: 23 }}
                    />
                    <Text style={{ fontSize: 16 }}>Active Account</Text>
                </View>
            </View>
            <FlatList
                data={itemList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item}</Text>
                            <Text style={{ fontSize: 16, marginRight: 10 }}>{'\u25BC'}</Text>
                        </TouchableOpacity>
                        
                        {index !== itemList.length - 1 && (
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ccc',
                                    marginHorizontal: 0,
                                }}
                            />
                        )}
                    </View>
                )}
            />
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 43,
                    backgroundColor: '#f0f0f0',
                    alignItems: 'row',
                    justifyContent: 'center',
                }}
            >
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#f0f0f0',
                    padding: 10,
                    marginTop: 20,
                }}>
                    <Text style={{ fontSize: 14, marginRight: 70 }}>Hi, {username}</Text>
                    <Image
                        source={require('../../assets/ai2.png')}
                        style={{ width: 35, height: 35, borderRadius: 20 }}
                    />
                    <Text style={{ fontSize: 18, marginLeft: 10 }}>AI Ulaa</Text>
                    <Image
                        source={require('../../assets/filter2.png')}
                        style={{ width: 35, height: 35, borderRadius: 20, marginLeft: 50 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Profile;
