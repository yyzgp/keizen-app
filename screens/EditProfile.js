import React, { useState } from 'react';
import { Dimensions, ScrollView, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { useDispatch, connect } from 'react-redux';
import { setName, setLoginState } from '../redux/reducers';
import LinearGradient from 'react-native-linear-gradient';

//<---------------------------------------------------------Profile------------------------------------------------------------------------>

const { width } = Dimensions.get("window");
const height = width * 0.6;

function ProfileScreen({ navigation }) {

    const dispatch = useDispatch();

    const [usernameInput, setUsernameInput] = useState('gian');
    const [passwordInput, setPasswordInput] = useState('1234');

    const passwordReg = /^.{1,16}$/;

    const loginRequest = () => {
        if (!usernameInput) {
            if (passwordInput) {
                alert('Please fill in your username!');
            } else {
                alert('Please fill in your username and password!');
            }
        }
        if (usernameInput) {
            if (!passwordInput) {
                alert('Please fill in your password!');
            } else {
                if (passwordReg.test(passwordInput) === false) {
                    alert('Please input the correct password!');
                } else {
                    checkDB();
                }
            }
        }
    };

    const checkDB = async () => {

        //INCLUDE LOGIN LOGIC HERE
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ Username: usernameInput, Password: passwordInput })
        // };

        // return fetch('http://54.255.119.126/api/sky.svc/web/login', requestOptions)
        //     .then((response) => response.json())
        //     .then((json) => {
        //         const returnToken = json.LogInResult;
        //         console.log('This is the returned token: '+returnToken);
        //         dispatch(setName(usernameInput));
        //         dispatch(setToken(returnToken));
        //         dispatch(setLoginState(true));
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        dispatch(setName(usernameInput));
        dispatch(setLoginState(true));

    };


    return (

        <View style={styles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                {/* THIS CHANGE TO IMAGE (SET DEFAULT PROFILE IMAGE) */}
                <ImageBackground style={styles.backgroundImage} source={require('../images/Login_BG.jpg')}>
                    <LinearGradient colors={["#00000000", "#FFFFFF40", "#000000B3"]} style={styles.linearGradient}>
                        <Text style={styles.label}>Keizen</Text>
                    </LinearGradient>
                </ImageBackground>
                {/* THIS CHANGE TO IMAGE (SET DEFAULT PROFILE IMAGE) */}

                <SafeAreaView>

                    <LinearGradient colors={["#000000FF", "#00000099", "#00000000"]} style={styles.linearGradient}>

                        <TextInput
                            maxLength={50}
                            style={styles.input}
                            placeholder="Username"
                            value={"gian"}
                            onChangeText={(data) => setUsernameInput(data)}
                        />
                        <TextInput
                            type={"password"}
                            maxLength={16}
                            style={styles.input}
                            placeholder="Password"
                            value={"1234"}
                            onChangeText={(data) => setPasswordInput(data)}
                        />

                        <TouchableOpacity onPress={loginRequest}>
                            <View style={styles.button}>
                                <Text style={styles.buttonLabel}>Login</Text>
                            </View>
                        </TouchableOpacity>

                    </LinearGradient>

                </SafeAreaView>

            </ScrollView>
        </View >
    );
}

const mapToState = state => ({
    name: state.name,
    token: state.token,
    loginState: state.loginState
});

export default connect(mapToState)(ProfileScreen);

//<---------------------------------------------------------StyleSheet------------------------------------------------------------------------>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'aliceblue'
    },
    scroll: {
        width,
        height
    },
    input: {
        height: 50,
        width: 220,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        padding: 10,
        alignSelf: 'center',
        fontSize: 24,
        color: 'white',
        textAlign: 'center'
    },
    button: {
        paddingHorizontal: 2,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: "green",
        alignSelf: "center",
        marginTop: 30,
        minWidth: "50%",
        textAlign: "center",
    },
    buttonLabel: {
        fontSize: 28,
        alignSelf: "center",
        fontWeight: "500",
        color: "white",
    },
    label: {
        paddingVertical: 60,
        top: 80,
        textAlign: "center",
        fontSize: 72,
        fontFamily: 'sans-serif-condensed',

        color: 'white'
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'center',
        width,
        height
    },
    image: {
        width,
        height: 50,

    },
    linearGradient: {
        flex: 1,
        width,
        height: height*1.77,
        justifyContent: 'center'
    }
});