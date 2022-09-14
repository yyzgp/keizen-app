import React, { useState, useEffect } from 'react';
import { Image, Dimensions, StyleSheet, View, FlatList, Text, TouchableOpacity, SafeAreaView, TextInput, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setItem } from '../redux/reducers';

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

function Completed({ navigation }) {

    const { item, list, location, store, scan } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [searchVal, setSearchVal] = useState(scan !== null && scan !== undefined && scan !== '' ? scan : '');
    const [selectedId, setSelectedId] = useState(null);
    const [load, setLoad] = useState(true);
    const [checkCount, setCheckCount] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [storeTheValue, setStoreTheValue] = useState('');
    
    //Individual items rendering
    const Item = ({ item, backgroundColor, textColor }) => (

        item.completed=='no'?

        <TouchableOpacity
            onPress={() => {
                const itemArray = { name: item.name, barcode: item.barcode, stock: item.stock, weight: item.weight, url: item.url, location: item.location, store: item.store };
                dispatch(setItem(itemArray));
                navigation.navigate('Job');
            }}
            style={[styles.button, backgroundColor]}
        >

            <Image source={{ uri: item.url }} style={styles.image} />

            <View style={{ flexDirection: 'row' }}>

                <View>

                    <Text style={[styles.buttonLabel, textColor]}>{item.name}</Text>

                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Text style={[styles.buttonDetailLabel, textColor]}>Completed: {item.completed}</Text>
                            <Text style={[styles.buttonDetailLabel, textColor]}>Stock: {item.stock}</Text>
                        </View>

                    </View>

                </View>

            </View>

        </TouchableOpacity> : <View></View>
    );

    //Main useEffect
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 2000);
    }, [searchVal]);

    //Rendering of each items
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "darkblue" : "lightblue";
        const color = item.id === selectedId ? 'white' : 'black';

        if(searchVal == '') {
            return (
                <Item
                    item={item}
                    onPress={() => setSelectedId(item.id)}
                    backgroundColor={{ backgroundColor }}
                    textColor={{ color }}
                />
            );
        } else {
            if (item.name.toUpperCase().includes(searchVal.toUpperCase().trim().replace(/\s/g, ""))) {
                return (
                    <Item
                        item={item}
                        onPress={() => setSelectedId(item.id)}
                        backgroundColor={{ backgroundColor }}
                        textColor={{ color }}
                    />
                );
            }
        }
    };

    return (

        <View style={styles.container}>

            {

                load ?
                
                    <View style={{ paddingTop: 150 }}><ActivityIndicator size="large" /><Text>Loading</Text></View> : <SafeAreaView style={styles.scroll}>

                        <TextInput
                            maxLength={999}
                            style={styles.input}
                            defaultValue={searchVal}
                            onChangeText={(data) => { setSearchVal(data); setStoreTheValue(data) }}
                        />

                        <View style={styles.listFrame}>
                            {searchVal?<Text style={styles.searchText}>Search results for "{searchVal}"</Text>:<View/>}
                            <FlatList
                                data={list}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                extraData={selectedId}
                                showsVerticalScrollIndicator={false}
                            />
                            <View style={{ marginBottom: 120 }}></View>
                        </View>

                    </SafeAreaView>
            }

        </View>

    );
}

export default Completed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    input: {
        height: 35,
        width: 250,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        alignSelf: 'center',
        marginBottom: 20
    },
    scroll: {
        width,
        height,
    },
    button: {
        paddingHorizontal: 2,
        paddingVertical: 10,
        borderRadius: 13,
        alignSelf: "center",
        marginTop: 15,
        width: "95%",
        height: 100
    },
    buttonLabel: {
        fontSize: 26,
        alignSelf: 'flex-start',
        marginLeft: 100,
    },
    buttonDetailLabel: {
        fontSize: 14,
        alignSelf: 'flex-start',
        marginLeft: 100,
        marginTop: 5,
    },
    location: {
        alignSelf: "center",
        margin: 10,
    },
    locationLabel: {
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "500",
        color: "black",
    },
    listFrame: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'darkslategrey',
        height,
        paddingBottom: 200,
        paddingTop: 3
    },
    subButton: {
        backgroundColor: 'green',
        borderRadius: 15,
        width: 50,
        height: 25,
        marginLeft: 15,
        marginTop: 5,
        justifyContent: 'center'

    },
    subButtonLabel: {
        fontSize: 12,
        alignSelf: 'center',
        color: 'white'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 90,
        resizeMode: 'contain',
        position: 'absolute',
        top: 10,
        left: 10
    },
    searchText: {
        color: 'white',
        marginLeft: 20,
        marginTop: 10
    },
});