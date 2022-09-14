import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

function JobDetails({ navigation }) {

    const { item } = useSelector(state => state.userReducer);
    const [iID, setIID] = useState(item.id);
    const [iBar, setIBar] = useState(item.barcode);
    const [iName, setIName] = useState(item.name);
    const [iStock, setIStock] = useState(item.stock);

    //Insert logic here: navigate from complete/job tab

    return (
        <View style={{ paddingTop: 100 }}>

            <View style={{ backgroundColor: 'cornsilk' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <View style={styles.button}>
                        <Text style={[styles.text, styles.exit]}><FontAwesomeIcon icon={faArrowLeft} color={'maroon'} size={15} style={{ marginTop: 5, marginLeft: 10 }} />Back</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Image source={{ uri: item.url }} style={styles.image} />

            <View style={styles.desc}>

                <Text style={[styles.text, styles.header]} >{iName}</Text>
                <Text style={styles.text} >id:  {iID}</Text>
                <Text style={styles.text} >Barcode: {iBar}</Text>
                <Text style={styles.text} >Stock:  {iStock}</Text>

                <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-evenly'}}>

                    <TouchableOpacity
                        onPress={() => {
                            let url = 'tel: +65' + item.phone;
                            Linking.openURL(url)
                        }}
                        style={{alignItems:'center'}}
                    >
                        <FontAwesomeIcon icon={faPhone} color={'green'} size={25} />
                        <Text style={{color:'green'}}>Call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            let url = 'whatsapp://send?text=' + '&phone=65' + item.phone;
                            Linking.openURL(url)
                                .then((data) => {
                                    console.log('WhatsApp Opened');
                                })
                                .catch(() => {
                                    alert('Make sure Whatsapp installed on your device');
                                });
                        }}
                        style={{alignItems:'center'}}
                    >
                        <FontAwesomeIcon icon={faMessage} color={'green'} size={25} />
                        <Text style={{color:'green'}}>Whatsapp</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default JobDetails;

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain',
        top: 20
    },
    button: {
        marginVertical: 15,
        alignSelf: 'flex-end',
        paddingRight: 10
    },
    text: {
        marginLeft: 10,
        fontSize: 18
    },
    header: {
        fontSize: 36,
        marginVertical: 20,
        color: 'black',
        fontFamily: 'sans-serif-condensed',
        fontStyle: 'italic'
    },
    desc: {
        marginTop: 20,
        backgroundColor: 'cornsilk',
        height: 400
    },
    exit: {
        color: 'maroon',
    }
});