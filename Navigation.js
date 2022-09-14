import React from 'react';
import { Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from 'react-redux';
import { setLoginState } from './redux/reducers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

import LoginScreen from './screens/Login';
import JobScreen from './screens/JobList';
import JobDetails from './screens/JobDetails';
import Completed from './screens/Completed';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get("window");
const height = width * 0.6;

const Stack = createStackNavigator();
const Login = createStackNavigator();
const Home = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Job = createStackNavigator();

const HomeNavigator = () => ( //Main Page Navigation (Home)
    <Home.Navigator screenOptions={{
        tabBarLabelStyle: { fontSize: 18},
        tabBarStyle: { backgroundColor: 'white', marginTop: 95 },
        swipeEnabled: true,
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'grey',
    }} >
        <Tab.Screen name='JobList' component={JobScreen} />
        <Tab.Screen name='Completed' component={Completed} />
    </Home.Navigator>
);

const LoginNavigator = () => ( //Login Page Navigation
    <Login.Navigator>
        <Login.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false, presentation: "modal" }} />
    </Login.Navigator>
);

const JobNavigator = () => (
    <Job.Navigator>
        <Job.Screen name='HomeScreen' component={HomeNavigator} options={{ headerShown: false, presentation: "modal" }} />
        <Job.Screen name='Job' component={JobDetails} options={{ headerShown: false, presentation: "modal" }} />
    </Job.Navigator>
)

export default AppNavigator = () => { //Application Navigation Logic

    const { loginState, name } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    return (
        <NavigationContainer>
            {loginState ?
                <Stack.Navigator
                    screenOptions={({route, navigation}) => ({ // transform screenOptions to a function
                        headerRight: () => 
                            <TouchableOpacity
                                style={{alignItems: 'center', padding:20, marginTop:15}}
                                onPress={()=>{dispatch(setLoginState(false))}}
                            >
                                <FontAwesomeIcon icon={faPowerOff} color={'maroon'} size={28}/>
                            </TouchableOpacity>
                        
                    })}>
                    <Stack.Screen
                        name={"Welcome Back, "+name}
                        component={JobNavigator}
                        options={{ 
                            headerShown: true,
                            headerTitleStyle: {
                                fontSize: 30,
                                color:'white',
                                opacity: .5,
                                fontFamily: 'sans-serif-thin',
                                fontStyle: "italic",
                                fontWeight: '300',
                                height: 160
                            },
                            headerBackground: () => (
                                <ImageBackground
                                    style={{ width: width, height: 150, alignSelf: 'center'}}
                                    source={require('./images/Header_BG.jpg')}
                                ><LinearGradient colors={["#00000000", "#000000AA", "#000000EE"]} style={styles.linearGradient}></LinearGradient></ImageBackground>
                            ),
                            headerTitleContainerStyle: { paddingTop: 120 } 
                        }}
                    />
                    <Stack.Screen name="Login" component={LoginNavigator} />
                </Stack.Navigator> : <LoginNavigator />}
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width,
        height: height*1.3,
        justifyContent: 'center'
    }
});