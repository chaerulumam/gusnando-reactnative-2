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
            Detail
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          {this.props.route.params.judul}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 15,
          }}>
          {this.props.route.params.deskripsi}
        </Text>
      </View>
    );
  }
}

export default Home;
