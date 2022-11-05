import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="#1976d2" />
        <View
          style={{
            backgroundColor: '#2196f3',
            paddingVertical: 15,
            elevation: 3,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon
              name="chevron-left"
              size={30}
              color="#fff"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            About
          </Text>
        </View>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            marginTop: 10,
            fontSize: 20,
          }}>
          This app build by JAMET
        </Text>
      </View>
    );
  }
}

export default Home;
