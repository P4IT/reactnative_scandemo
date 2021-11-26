/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import Cidscan from 'react-native-cidscan';
import RNCIDScanView from 'react-native-cidscan/src/cidscanview';

var isTorch = false;

function startDecode() {
  Cidscan.startDecoder();
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
        <RNCIDScanView style={{height: '100%', width: '100%'}} />
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
        </View>
        <View style={styles.circle} />
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
