import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          judul: 'Apel',
          deskripsi: 'Apel adalah buah',
        },
        {
          judul: 'Jeruk',
          deskripsi: 'Jeruk adalah buah',
        },
        {
          judul: 'Rambutan',
          deskripsi: 'Rambutan adalah buah',
        },
        {
          judul: 'Mangga',
          deskripsi: 'Mangga adalah buah',
        },
        {
          judul: 'Starwberry',
          deskripsi: 'Starwberry adalah buah',
        },
        {
          judul: 'Pisang',
          deskripsi: 'Pisang adalah buah',
        },
        {
          judul: 'Melon',
          deskripsi: 'Melon adalah buah',
        },
        {
          judul: 'Anggur',
          deskripsi: 'Anggur adalah buah',
        },
        {
          judul: 'Pear',
          deskripsi: 'Pear adalah buah',
        },
      ],

      dataTampil: [
        {
          judul: 'Apel',
          deskripsi: 'Apel adalah buah',
        },
        {
          judul: 'Jeruk',
          deskripsi: 'Jeruk adalah buah',
        },
        {
          judul: 'Rambutan',
          deskripsi: 'Rambutan adalah buah',
        },
        {
          judul: 'Mangga',
          deskripsi: 'Mangga adalah buah',
        },
        {
          judul: 'Starwberry',
          deskripsi: 'Starwberry adalah buah',
        },
        {
          judul: 'Pisang',
          deskripsi: 'Pisang adalah buah',
        },
        {
          judul: 'Melon',
          deskripsi: 'Melon adalah buah',
        },
        {
          judul: 'Anggur',
          deskripsi: 'Anggur adalah buah',
        },
        {
          judul: 'Pear',
          deskripsi: 'Pear adalah buah',
        },
      ],

      pencarian: '',
    };
  }

  // create function
  pencarian = () => {
    let data = this.state.data;

    data = data.filter(item =>
      item.judul.toLowerCase().includes(this.state.pencarian.toLowerCase()),
    );

    this.setState({dataTampil: data});
  };

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
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
              }}>
              Home
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('About')}>
            <Icon
              name="question-circle"
              size={30}
              color="#fff"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>

        <TextInput
          value={this.state.pencarian}
          onChangeText={text =>
            this.setState({pencarian: text}, () => this.pencarian())
          }
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 3,
          }}
          placeholder="Masukkan kata disini"
        />

        <FlatList
          data={this.state.dataTampil}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                marginVertical: 10,
                marginHorizontal: 20,
                backgroundColor: '#2196f3',
                padding: 10,
                borderRadius: 5,
                elevation: 3,
              }}
              onPress={() =>
                this.props.navigation.navigate('Detail', {
                  judul: item.judul,
                  deskripsi: item.deskripsi,
                })
              }>
              <Text style={{color: '#fff'}}>{item.judul}</Text>
              <Text style={{color: '#fff'}}>{item.deskripsi}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.judul}
        />
      </View>
    );
  }
}

export default Home;
