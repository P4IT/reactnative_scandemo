/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, NativeEventEmitter, ScrollView, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Cidscan from 'react-native-cidscan';



const mKey =
  'avQGpsFFs5pKam7OyN8VjIdqeCv/lyU1lqQQ73lOdnfv/4VQHAotVJlBLcmAu180U7ix7n6XYZBdXEea2TnCsZOYuP8kiHcC/E9DLt1DJEh/65gr75Onj8CZ1HP0X2nRipGMgyEyqYfy9VA03USSYC3k51KXzYQosF19j4HKXyf32Jl47Aaw5FRPxZIbK3QLKDtqCtEq1PmRxY42ceLoEncQsHBRQa2niIcRQ+asvOb//4+hSCpJidqTwHhaLZs4SdjuzJIJRIDKB45mFVOnO/2S3kobKvTR48+h3ZQOS+eyVOFicwCByZ2D9Oqg/pTQQtZkLNwX31wdwE0QzoaJ8JX/N2jtM0vthbyIYizCj/XQb53d+t2spu0PTpt4gLWl2pJokOmK1OteQDtTzK4SzA==';
const mCust = 'P4I082220190001';

var pp;

async function init() {
  await Cidscan.initCaptureID(callback);
  
}

async function activate() {
  await Cidscan.activateEDKLicense(mKey, mCust, license);
}

function callback(error, result) {
  if (error) {
    // Funktion eurer Wahl
  } else {
    activate();
  }
}

function license(error, result) {
  if (error) {
    // Funktion eurer Wahl
  } else {
    //Cidscan.setContinuousMode(true);
    // Funktion eurer Wahl
  }
}

async function startscanner(viewid) {
  Cidscan.enableAllBarcodes(true);
  await Cidscan.startCameraPreview(camera);
  Cidscan.startDecoder();
}

function camera(error, result) {
  if (error) {
    // do something in case of an error
  } else {
    Cidscan.closeCamera();
    // Handle success
  }
}

export default class Homescreen extends Component {
  render() {
    pp = this;
    return (
      //<ScrollView style={{ backgroundColor: 'rgba(255, 255, 255, 0.0)' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 40,
            backgroundColor: 'rgba(15, 100, 180, 255)',
          }}>
          <View style={{
            flex: 3,
            backgroundColor: 'rgba(95, 100, 180, 255)',
          }}>
            <Card>
              <Card.Title>First Step - Initialize</Card.Title>
              <Card.Divider />
              <Button
                title="Initialize"
                onPress={() => {
                  init();
                }}
              />
            </Card>
            <Card>
              <Card.Title>Second Step - Scannen</Card.Title>
              <Card.Divider />
              <Button
                title="Scanner Page"
                onPress={() => this.props.navigation.navigate('Scanner')}
              />
            </Card>
          </View>
        </View>
      //</ScrollView>
    );
  }
}
