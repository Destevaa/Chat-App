import React from 'react';
import {View, Text, AsyncStorage, TouchableOpacity} from 'react-native';
import User from '../User';
import styles from '../constants/styles';


export default class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Chats'
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

    render(){
        return(
            <View style={styles.container}>
                <Text>
                    {User.phone}
                </Text>
                <TouchableOpacity onPress={this._signOutAsync}>
                <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}