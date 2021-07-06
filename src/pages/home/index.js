import * as React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  SafeAreaView, 
  Image
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
              Mangas 
            <View>
              <Image
                style={{
                  width: 400,
                  height: 350,
                }}
                source={{
                  uri: "https://www.einerd.com.br/wp-content/uploads/2020/04/Shonen-Jump-capa-890x466.jpg"
                }}
              />
            </View>
          </Text>
          <TouchableHighlight
            style={styles.button}
            onPress={
              () => navigation.navigate(
                'Lista', { screen: 'Lista' }
              )}>
            <Text style={{ color:'#fcfcfc'}}>Lista de Produtos</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={
              () => navigation.navigate('Details')
            }>
            <Text style={{ color:'#fcfcfc'}}>Details</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={
              () => navigation.navigate(
                'Cadastro', { screen: 'Cadastro' }
              )}>
            <Text style={{ color:'#fcfcfc'}}>Cadastro</Text>
            </TouchableHighlight>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#7b3ff2',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default HomeScreen;