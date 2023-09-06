import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default function MarkersComponent() {

  //londrina -23.2927, Longitude: -51.1732

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
            title: 'Point 1',
            pinColor: '#FF0000'
        },
        {
            id: 2,
            latitude: -23.3027,
            longitude: -51.1832, 
            title: 'Point 2',
            pinColor: '#00FF00'
        },
        {
            id: 3,
            latitude: -23.2827,
            longitude: -51.1832, 
            title: 'Point 3',
            pinColor: '#0000FF'
        },
    ]
  );

  const [typeMap, setTypeMap] = useState('standard');

  async function getMarket(value){
   
    // alert(`latitude: ${value?.nativeEvent?.coordinate?.latitude} -
    // longitude: ${value?.nativeEvent?.coordinate?.longitude}`);
    let newId = markerList.length;
    newId = newId + 1;

    let obj = {
        id: newId,
        latitude: value?.nativeEvent?.coordinate?.latitude,
        longitude: value?.nativeEvent?.coordinate?.longitude, 
        title: `Point ${newId}`,
        pinColor: `#F0F000`
    }
    
    await setMarkerList([...markerList, obj]);

    // await setMarkerList([...markerList,{id: value?.nativeEvent?.coordinate?.latitude,
    //     latitude: value?.nativeEvent?.coordinate?.latitude,
    //     longitude: value?.nativeEvent?.coordinate?.longitude, 
    //     title: `Point novo`,
    //     pinColor: `#FF0000`}]);
    
  }

  //map tem seus eventos quando clica, quando arrasta pegando uma nova posição centralizada do mapa...
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcadores - New Marker</Text>
      
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
              pinColor={point.pinColor} 
             />
            )
          })
         

        }

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

 <Marker coordinate={{ latitude: currentMarket.latitude, longitude:currentMarket.longitude }}
         title='Point'
         description='Selecionado pelo botão'
         pinColor='#008000'
        />

*/