import { StatusBar } from 'expo-status-bar';

import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';

export default function App() {

  function alterMap() {

  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto Maps</Text>
      
      <View style={{ justifyContent:'space-around',margin:10, marginBottom: 32, flexDirection:'row', width:'90%' }}>
        <TouchableOpacity onPress={() => alterMap()} style={{ width: '48%', borderRadius: 25,backgroundColor: '#1E90FF',justifyContent:'center', alignItems: 'center',borderWidth:2, borderColor: '#4169E1', paddingHorizontal: 16, paddingVertical: 8 }} >
          <Text style={{ color:'#FFF', fontSize: 18 }}>Assis</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alterMap()} style={{ width: '48%', borderRadius: 25,backgroundColor: '#1E90FF',justifyContent:'center', alignItems: 'center',borderWidth:2, borderColor: '#4169E1', paddingHorizontal: 16, paddingVertical: 8 }}>
          <Text style={{ color:'#FFF', fontSize: 18 }}>Londrina</Text> 
        </TouchableOpacity>
      </View>
      
      <MapView 
       style={{ width: 350, height: 500 }}
       region={{ 
        latitude: -23.5492243,
        longitude: -46.5813785,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 16
  },
});

/*

 <MapView 
       style={{ width: 350, height: 500 }}
       initialRegion={{ 
        latitude: -23.5492243,
        longitude: -46.5813785,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        }}
      />



*/