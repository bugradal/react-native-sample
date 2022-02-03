import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button, Avatar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';


export default function Login({ navigation }) {
  // useState Using
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passStatus, setPassStatue] = useState(true);

  // create Function
  const fncLogin = () => {
    //setPassStatue(false)
    if (password == '' && email == '') {
      Alert.alert('Password and E-mail is empty!');
    } else if (password == '') {
      Alert.alert('Password is empty!');
    } else if (email == '') {
      Alert.alert('E-mail is empty!');
    } else {
      //console.log('fncLogin Call', email, password);

      // https://www.jsonbulut.com/json/userLogin.php?ref=c7c2de28d81d3da4a386fc8444d574f2&userEmail=bugra@mail.com&userPass=bd12345.&face=no
      const url = 'https://www.jsonbulut.com/json/userLogin.php';
      const params = {
        ref: 'c7c2de28d81d3da4a386fc8444d574f2',
        userEmail: email,
        userPass: password,
        face: 'no',
      };
      Axios.get(url, { params: params }).then((res) => {
        const u = res.data.user[0];
        const durum = u.durum;
        const message = u.mesaj;

        if (durum == true) {
          // sayfa geçişi yap
          navigation.navigate('product');
        } else {
          Alert.alert(message);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignSelf: 'center', marginTop: 30 }}>
          <Avatar.Image
            style={{ backgroundColor: 'transparent' }}
            size={70}
            source={require('./assets/google-icon.png')}
          />
        </View>

        <Text style={styles.txtTitle}>User Login</Text>

        <TextInput
          label="E-Mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          keyboardType="email-address"
          style={styles.txtField}
          autoCapitalize="none"
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          secureTextEntry={passStatus}
          style={styles.txtField}
        />

        <View style={styles.cardView}>
          <Button
            style={styles.btnStyle}
            onPress={() => fncLogin()}
            icon="login"
            mode="contained">
            Login
          </Button>

          <Button
            style={styles.btnStyle}
            onPress={() => navigation.navigate('signUp')}
            icon="account-arrow-right"
            mode="contained">
            Sign Up
          </Button>
        </View>
      </ScrollView>

      <View style={styles.footerCard}>
        <AwesomeIcon
          color="#bababa"
          style={{ textAlign: 'center' }}
          name="google"
          size={30}
        />
        <Text style={styles.footerCardText}>Designed by Bugra Dal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  txtTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    color: '#598ee3',
    marginBottom: 0,
  },
  btnStyle: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#598ee3',
  },
  txtField: {
    marginTop: 10,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerCard: {
    margin: 10,
  },
  footerCardText: {
    textAlign: 'center',
  },
});
