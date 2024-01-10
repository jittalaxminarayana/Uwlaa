import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

const servicesData = [
    { id: "1", title: "TRANSPORT", image: require('../../assets/truck.png'), description: "30000+ Transport available in your worldwide Transport service"},
    { id: "2", title: "MOVERS", image: require('../../assets/movers.png'), description: "15000+ Movers available in your worldwide Movers service"},
    { id: "3", title: "MANPOWER", image: require('../../assets/manpower.png'), description: "25000+ Manpower available in your worldwide Manpower service"},
];

function Home() {
    const [selectedService, setSelectedService] = useState(null);
    const navigation = useNavigation();

    const handleServiceSelection = (id) => {
        setSelectedService(id);
        if (id === '1') { 
            navigation.navigate('Transport');
        }
        else if(id === '2'){
            navigation.navigate('Movers');
        }
        else if(id === '3'){
            navigation.navigate('Manpower');
        }

    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleServiceSelection(item.id)}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                backgroundColor: selectedService === item.id ? '#001a33' : '#f0f0f0',
                marginBottom: 20,
                position: 'relative',
            }}
        >
            {selectedService === item.id && (
                <Image
                    source={require('../../assets/check.png')}
                    style={{ position: 'absolute', top: 5, left: 5, width: 20, height: 20 }}
                />
            )}
            <Image
                source={item.image}
                style={{ width: 63, height: 63, borderRadius: 35 }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={{ fontSize: 18, color: selectedService === item.id ? 'white' : 'black' }}>{item.title}</Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 14, color: selectedService === item.id ? 'white' : 'black', maxWidth: '90%' }}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
            <View>
                <View
                    style={{
                        height: 43,
                        backgroundColor: '#f0f0f0',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 10,
                            height: 75, 
                        }}
                    >
                        <Image
                            source={require('../../assets/ai2.png')}
                            style={{ width: 45, height: 45, borderRadius: 30 }}
                        />
                        <Text style={{ fontSize: 25, marginLeft: 10, color: 'black' }}>AI Ulaa</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ fontSize: 18, marginLeft: 10, color: 'black', fontWeight: 'bold', marginTop: 50 }}>Select Service</Text>
            <FlatList
                data={servicesData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ marginTop: 20 }}
            />
        </View>
    );
}

export default Home;
