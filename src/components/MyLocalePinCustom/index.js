


import { StatusBar } from 'expo-status-bar';

import { useEffect, useState } from 'react';

import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import PinCustom from '../PinCustom';

export default function MyLocalePinCustom() {

  const [currentMarket, setCurrentMarket] = useState({
    // latitude: -23.3077,
    // longitude: -51.1692,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421
    });  

  useEffect(() => {

    getLocale();

  }, []);  

  async function getLocale() {
    // await navigator.geolocation.getCurrentPosition(
    //    async ({coords:{latitude, longitude}}) => {
    //     setCurrentMarket({
    //     latitude: latitude,
    //     longitude: longitude,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421
    //     })
    //    },  
    //    (err) => {console.log(err) },
    //    {
    //     timeout: 2000,
    //     maximumAge: 1000
    //    }
    // );

     navigator.geolocation.getCurrentPosition(
          async (position) => {
              setCurrentMarket({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
              });
          },
          (err) => { console.log(err); },
          {
              timeout: 2000,
              maximumAge: 1000
          }
      );

  }

  const [markerList, setMarkerList] = useState(
    [
        // {
        //     id: 1,
        //     latitude: -23.2927,
        //     longitude: -51.1732, 
        //     title: 'Carro 1',
        //     pinColor: '#FF0000',
        //     title: 'disponivel'
        // },
        {
            id: 2,
            latitude: -23.3027,
            longitude: -51.1832, 
            title: 'Carro 2',
            pinColor: '#00FF00',
            title: 'Indisponivel'
        },
        {
            id: 3,
            latitude: -23.2827,
            longitude: -51.1832, 
            title: 'Carro 3',
            pinColor: '#0000FF',
            title: 'Agendado'
        },
    ]
  );

  const [typeMap, setTypeMap] = useState('standard');

  //map tem seus eventos quando clica, quando arrasta pegando uma nova posição centralizada do mapa...
  
  
  //showsUserLocation  somente ela já define true, SE FOSSE para não exibir a localização do user seria
  //showUserLocation={false}

  //minZoomLevel={0  A  20}
  //minZoomLevel={16}
  //loadingEnabled
  //showsUserLocation
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Localização - PINS Customizado</Text>
      
      <MapView 
       mapType={typeMap}
       style={{ width: 350, height: 550 }}
       region={ currentMarket }
       zoomEnabled={true}
       rotateEnabled={false}
       minZoomLevel={12}
       loadingEnabled
       showsUserLocation={true}
      >

        { 
          markerList.map((point) => {
            return(
             <Marker 
              key={point.id}
              coordinate={{ latitude: point.latitude, longitude: point.longitude }}
              title={point.title}
              //image={point.img}
             >
              <PinCustom key={point.id} color={point.pinColor} />
            </Marker>  
            )
          })
         

        }

      </MapView>
      
    </View>
  );
}

//<PinCustom key={point}  title={point.title} color={point.pinColor} />

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

