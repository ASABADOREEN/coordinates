import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import {Location, Permissions} from 'expo';

export default class App extends React.Component {

  state = {
    location: {},
    errorMessage: '',
  };
  
  componentWillMount(){
    this._getLocation();
  }
  
  _getLocation = async () => {
    const {status} = await Permissions.askAsnc(Permissions.LOCATION)

    if(status !== 'granted') {
      console.log('PERMISSION NOT GRANTED!');

      this.setState({
        errorMessage: 'PERMISSION NOOT GRANTED'
      })
    }

    const userLocation = Location.getCurrentPositionAsync();

    this.setState({
      location
    });
  };
  
  
  
  render(){
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(this.state.location)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
