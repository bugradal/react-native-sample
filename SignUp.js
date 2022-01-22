import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button, Avatar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function SignUp({ navigation }) {
  // useState Using
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


 var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
      );

  // create Function
  const fncSignUp = () => {
    if (name == '') {
      Alert.alert('Name is empty!');
    } else if (surname == '') {
      Alert.alert('Surname is empty!');
    } else if (phone == '') {
      Alert.alert('Phone is empty!');
    } else if (email == '') {
      Alert.alert('E-mail is empty!');
    } else if (password == '') {
      Alert.alert('Password is empty!');
    } else if (!pattern.test(email)) {
        Alert.alert('Please enter valid email address.');
      
    } else {
      console.log('fncSignUp Call', name, surname, phone, email, password);
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

        <Text style={styles.txtTitle}>Sign Up</Text>

        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          keyboardType="default"
          style={styles.txtField}
          autoCapitalize="none"
        />
        <TextInput
          label="Surname"
          value={surname}
          onChangeText={(text) => setSurname(text)}
          mode="outlined"
          keyboardType="default"
          style={styles.txtField}
          autoCapitalize="none"
        />
        <TextInput
          label="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          mode="outlined"
          keyboardType="phone-pad"
          style={styles.txtField}
          autoCapitalize="none"
        />
        <TextInput
          label="E-Mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          type="email"
          keyboardType="email-address"
          style={styles.txtField}
          autoCapitalize="none"
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          secureTextEntry={true}
          style={styles.txtField}
        />

        <View style={styles.cardView}>
          <Button
            style={styles.btnStyle}
            onPress={() => fncSignUp()}
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
    backgroundColor:'#598ee3'
  },
  txtField: {
    marginTop: 10,
  },
  footerCard: {
    margin: 10,
  },
  footerCardText: {
    textAlign: 'center',
  },
});
