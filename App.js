import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted')
    })()
  }
  //Request Camera Permissions
  useEffect(() => {
    askForCameraPermission();
  }, []);

  //What happens when we scan the barcode
  const handleBarCodeScanner = ({type, data}) =>{
    setScanned(true);
    setText(data);
    console.log('Type: ' + type + '\nData' + data)
  }
 
  //Check permissions and return the screens
if (hasPermission == null){
  return(    
    <View style={styles.container}>
    <Text>Requesting for camera permission</Text>
  </View>
  )
}

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Lol</Text>
      <StatusBar style="auto" />
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
