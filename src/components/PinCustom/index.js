import { StyleSheet, Text, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default function PinCustom({color}) {

    //fOI ALTERADO PARA TESTE
  return ( //PODE ADD UMA IMAGE NO LUGAR DO TEXT
    <View style={{borderRadius:20, height:6, width: 6, backgroundColor:color, padding:4}}>
      
    </View>
  );
}

/*

<View style={{height:50, backgroundColor:color, padding:4, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ color: '#FFF' }}>
       {title}
      </Text>
    </View>

*/