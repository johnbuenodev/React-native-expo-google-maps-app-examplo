import { StyleSheet, View } from 'react-native';

import MapButtonMarker from './src/components/mapButtonMarker';
import MarkerPersonalizado from './src/components/markerPersonalizado';
import MarkersComponent from './src/components/markers';

export default function App() {

  
  return (
    <View style={styles.container}>
     {/* <MapButtonMarker /> */}
     {/* <MarkersComponent /> */}
     <MarkerPersonalizado />
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
});
