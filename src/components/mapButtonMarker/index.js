import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default function MapButtonMarker() {

  //assis Latitude: -22.661, Longitude: -50.3995

  //londrina -23.2927, Longitude: -51.1732

  //marilia  -22.2208, Longitude: -49.9486
  const [currentMarket, setCurrentMarket] = useState({
    latitude: -22.661,
    longitude: -50.3995,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  const [typeMap, setTypeMap] = useState('standard');

  const [textValue, setTextValue] = useState(`Lat: -22.661 | Lon: -50.3995`);
  //const [textValue, setTextValue] = useState(`Lat: ${currentMarket.latitude} | Lon: ${currentMarket.longitude}`);

  async function alterMap(lat, lon) {

    await setCurrentMarket({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

  }

  async function alterMap(lat, long) {

    await setCurrentMarket({
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

    await setTextValue(`Lat: ${currentMarket.latitude} | Lon: ${currentMarket.longitude}`);
    
  }

  async function alterMovMap(value) {

    // alert(value.nativeEvent?.coordinate?.latitude - value.nativeEvent?.coordinate?.longitude);

    await setCurrentMarket({
      latitude: value.nativeEvent?.coordinate?.latitude,
      longitude: value.nativeEvent?.coordinate?.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

    //  await setTextValue(`Lat: ${currentMarket.latitude} | Lon: ${currentMarket.longitude}`);
   
  }

  async function getMarket(value){
   
    alert(`latitude: ${value?.nativeEvent?.coordinate?.latitude} -
    longitude: ${value?.nativeEvent?.coordinate?.longitude}`);
    
    await setCurrentMarket({
      latitude: value?.nativeEvent?.coordinate?.latitude,
      longitude: value?.nativeEvent?.coordinate?.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

    await setTextValue(`Lat: ${currentMarket?.latitude} | Lon: ${currentMarket?.longitude}`);
    
  }

  async function alterTypeMap(value) {
    await setTypeMap(value);
  }

  //map tem seus eventos quando clica, quando arrasta pegando uma nova posição centralizada do mapa...
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto Maps</Text>

      <Text style={styles.subTitle}>{textValue}</Text>
      
      <TouchableOpacity onPress={() => alterMap(-22.661, -50.3995)} style={{ width: '48%', borderRadius: 25,backgroundColor: '#1E90FF',justifyContent:'center', alignItems: 'center',borderWidth:2, borderColor: '#4169E1', paddingHorizontal: 16, paddingVertical: 8 }} >
          <Text style={{ color:'#FFF', fontSize: 18 }}>Assis-SP</Text>
      </TouchableOpacity>

      <View style={{ justifyContent:'space-around',margin:10, marginBottom: 24, flexDirection:'row', width:'90%' }}>
        <TouchableOpacity onPress={() => alterMap(-23.2927, -51.1732)} style={{ width: '48%', borderRadius: 25,backgroundColor: '#1E90FF',justifyContent:'center', alignItems: 'center',borderWidth:2, borderColor: '#4169E1', paddingHorizontal: 16, paddingVertical: 8 }} >
          <Text style={{ color:'#FFF', fontSize: 18 }}>Londrina-PR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alterMap(-22.2208, -49.9486)} style={{ width: '48%', borderRadius: 25,backgroundColor: '#1E90FF',justifyContent:'center', alignItems: 'center',borderWidth:2, borderColor: '#4169E1', paddingHorizontal: 16, paddingVertical: 8 }}>
          <Text style={{ color:'#FFF', fontSize: 18 }}>Marília-SP</Text> 
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row',justifyContent:'space-around', width: '90%',  marginBottom: 8}}>
        <TouchableOpacity onPress={() => alterTypeMap('standard')} style={{ borderRadius: 25,backgroundColor: '#F08080',justifyContent:'center', alignItems: 'center', paddingHorizontal: 4, paddingVertical: 4, borderWidth:2, borderColor: '#CD5C5C'}} >
          <Text style={{ color:'#FFF', fontSize: 18 }}>Standard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alterTypeMap('satellite')} style={{ borderRadius: 25,backgroundColor: '#F08080',justifyContent:'center', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, borderWidth:2, borderColor: '#CD5C5C' }}>
          <Text style={{ color:'#FFF', fontSize: 18 }}>Satellite</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alterTypeMap('hybrid')} style={{ borderRadius: 25,backgroundColor: '#F08080',justifyContent:'center', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, borderWidth:2, borderColor: '#CD5C5C' }}>
          <Text style={{ color:'#FFF', fontSize: 18 }}>Hybrid</Text> 
        </TouchableOpacity>
      </View>
      
      <MapView 
       mapType={typeMap}
       style={{ width: 350, height: 500 }}
       initialRegion={ currentMarket }
       onMapReady={() => {console.log("Evento onMapReady")}}
       onRegionChangeComplete={(value) => alterMovMap(value)}  
       onPress={(value) => getMarket(value)}
      //  showsTraffic={true}
      >
        <Marker coordinate={{ latitude: currentMarket.latitude, longitude:currentMarket.longitude }}
         title='Point'
         description='Selecionado pelo botão'
         pinColor='#008000'
        />

      </MapView>



      {/* 

       Por padrão vem ativado como true essas propriedades

       desativar o scroll no mapa
       scrollEnabled={false}
       
       desativar o zoom no mapa
       zoomEnabled={false}  

       desativar permitir rotacionar o mapa
       rotateEnabled={false}

       exibir o traffico de veiculos no mapa
       showsTraffic={true}
      */}
      
    </View>
  );
}

//mapType="standard"   | "satellite"  | "hybrid"

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
    marginBottom: 12
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  }
});

/*

 <MapView 
       style={{ width: 350, height: 500 }}
       region
       initialRegion={{ 
        latitude: -23.5492243,
        longitude: -46.5813785,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        }}
      />

*/