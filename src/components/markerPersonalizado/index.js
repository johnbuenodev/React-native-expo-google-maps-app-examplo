import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import carro from '../../assets/carro.png';
import carro_down from '../../assets/carro_down.png';
import carro_left from '../../assets/carro_left.png';
import carro_right from '../../assets/carro_right.png';

export default function MarkerPersonalizado() { //Pin personalizado

  const [currentMarket, setCurrentMarket] = useState({
    latitude: -23.2927,
    longitude: -51.1732,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  const [markerList, setMarkerList] = useState(
    [
        {
            id: 1,
            latitude: -23.2927,
            longitude: -51.1732, 
            title: 'Carro 1',
            pinColor: '#FF0000',
            img: carro_right
        },
        {
            id: 2,
            latitude: -23.3027,
            longitude: -51.1832, 
            title: 'Carro 2',
            pinColor: '#00FF00',
            img: carro_down
        },
        {
            id: 3,
            latitude: -23.2827,
            longitude: -51.1832, 
            title: 'Carro 3',
            pinColor: '#0000FF',
            img: carro_left
        },
    ]
  );

  const [typeMap, setTypeMap] = useState('standard');

  const [textValue, setTextValue] = useState(`Lat: -23.2927 | Lon: -51.1732`);

  async function getMarket(value){
   
    let newId = markerList.length;
    newId = newId + 1;

    let obj = {
        id: newId,
        latitude: value?.nativeEvent?.coordinate?.latitude,
        longitude: value?.nativeEvent?.coordinate?.longitude, 
        title: `Carro ${newId}`,
        img: carro
    }
    
    await setMarkerList([...markerList, obj]);

  }

  //map tem seus eventos quando clica, quando arrasta pegando uma nova posição centralizada do mapa...
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcadores Personalizados</Text>
      
      <MapView 
       mapType={typeMap}
       style={{ width: 350, height: 550 }}
       region={ currentMarket }
       onPress={ (value) => { getMarket(value) }}
       zoomEnabled={false}
       rotateEnabled={false}
      >

        { 
          markerList.map((point) => {
            return(
             <Marker 
              key={point.id}
              coordinate={{ latitude: point.latitude, longitude: point.longitude }}
              title={point.title}
              image={point.img}
             />
            )
          })
         

        }

      </MapView>
      
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
    marginBottom: 12
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  }
});

