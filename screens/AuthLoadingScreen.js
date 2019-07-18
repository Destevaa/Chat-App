import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import User from '../User';
import firebase from 'firebase';



export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentDidMount(){
        // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCpyZWF984jsoPLpav95lb57lbNm-SPmtI",
        authDomain: "chatapp-1cc30.firebaseapp.com",
        databaseURL: "https://chatapp-1cc30.firebaseio.com",
        projectId: "chatapp-1cc30",
        storageBucket: "",
        messagingSenderId: "929988713451",
        appId: "1:929988713451:web:92dfda92bb970695"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');

    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}