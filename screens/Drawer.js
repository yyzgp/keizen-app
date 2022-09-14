import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faRunning } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch, connect } from 'react-redux';
import { setName, setLoginState } from '../redux/actions';

export default Drawer = (props) => {

    const { loginState } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const logoutNavigation = () => {
        dispatch(setName(''));
        dispatch(setLoginState(!loginState));
    }

    const profileNavigation = () => {
        props.navigation.navigate('ProfileScreen');
    }

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white", margin: 15 }}> Menu </Text>

            <View style={{ borderBottomColor: "white", borderBottomWidth: 1, width: 180 }} />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={profileNavigation}>
                <Text style={styles.buttonLabel}> <FontAwesomeIcon icon={faUser} color={'white'} size={20} /> Profile </Text>
            </TouchableOpacity>

            <View style={styles.separator} />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={logoutNavigation}>
                <Text style={[styles.buttonLabel, { color: "red", marginTop: 50 }]}> <FontAwesomeIcon icon={faRunning} color={'red'} style={{ alignSelf: 'flex-start' }} size={24} /> Log Out </Text>
            </TouchableOpacity>

        </View >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#3A3B3C",
    },
    button: {
        flex: 1,
        marginLeft: 20,
        paddingVertical: 20,
        borderRadius: 4,
        alignSelf: "flex-start",
        textAlign: "center",
        height: 40,
        width: 200
    },
    buttonLabel: {
        fontSize: 24,
        alignSelf: "auto",
        fontWeight: "500",
        color: "white",
    },
    separator: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        width: 180,
        marginTop: -60
    }
});