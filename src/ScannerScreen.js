/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import Cidscan from 'react-native-cidscan';
import RNCIDScanView from 'react-native-cidscan/src/cidscanview';

var isTorch = false;
var maxZoom = 1;
var minZoom = 1;
var avgZoom = 1;
var activeZoom = 1;

function startDecode() {
  // Init decoding
  Cidscan.startDecoder();

  // Get zoom values from camera
  Cidscan.getZoomRatios(callback);
}

function zoom(){
  //switch between zoom values
  if(activeZoom == minZoom){
    //Cidscan.getMaxZoom(callback);
    Cidscan.setCameraZoom(true, maxZoom);
    activeZoom = maxZoom;
    console.debug(maxZoom);
  } else {
    Cidscan.setCameraZoom(true, minZoom);
    activeZoom = minZoom;
    console.debug(minZoom);
  }
}

function callback(error, result) {
  if (error) {
    // Funktion eurer Wahl
  } else {
    //console.debug(result);
    console.debug(result);
    if(result.result[0].objValue.length > 3){
      maxZoom = result.result[0].objValue[result.result[0].objValue.length - 1];
      minZoom = result.result[0].objValue[0];
      avgZoom = result.result[0].objValue[(result.result[0].objValue.length / 2) - 1];
      console.debug(maxZoom + minZoom);
    } else {
      maxZoom = result.result[0].objValue[result.result[0].objValue.length - 1];
      minZoom = result.result[0].objValue[0];
      console.debug(maxZoom + minZoom);
    }
  }
}

function enableTorch() {
  if (!isTorch) {
    Cidscan.setTorch(true);
    isTorch = true;
  } else {
    Cidscan.setTorch(false);
    isTorch = false;
  }
}

const Circle = () => {
  return <View style={styles.circle} />;
};

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 100 / 2,
    backgroundColor: "red",
  },
  rectangle: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderColor: "red",
    borderWidth: 2,
  },
});

export default class Scannerscreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(100, 100, 100, 0)',
        }}>
        <RNCIDScanView style={{height: '100%', width: '100%'}}  
          onPreviewReady={() => {
            startDecode();
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 30,
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            padding: 10,
          }}>
          <View>
            <Button
              onPress={() => {
                startDecode();
              }}
              title="Click to decode"
            />
          </View>
          <View>
            <Button
              onPress={() => {
                zoom();
              }}
              title="Zoom"
            />
          </View>
        </View>
        <View style={styles.rectangle} />
        <View
          style={{
            position: 'absolute',
            top: 50,
            right: 20,
            flexDirection: 'row',
            height: 30,
            alignItems: 'center',
            padding: 10,
          }}>
          <View>
            <Icon
              reverse
              name="flashlight-outline"
              type="ionicon"
              color="#517fa4"
              onPress={() => {
                enableTorch();
              }}
              title="Flashlight"
            />
          </View>
        </View>
      </View>
    );
  }
}
