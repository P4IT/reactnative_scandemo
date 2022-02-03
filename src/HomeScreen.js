/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, NativeEventEmitter, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Cidscan from 'react-native-cidscan';

const captureIDHandlerEmitter = new NativeEventEmitter(Cidscan);

const mKey =
  '3GMM0JoPuBmTaEljW05fTTYwuxHoUJenUdhiOhlryLzk6JS2KrOQadsXwUljXlAJfy+38VQAwZL1IQTciywDA2J0vmNueQgqBhlRZIgaiKw85gcYVubic7CeEt4OMojQXxR9rax1x/Byh3hBKKiHFBzi0wQgLyzJBtkMZHYLLyfVdoDuD2DRTtnzPBDjTnTQKeumZQ5KlljTBCMzylTPKnqcm6lvebEtS6tPR0dBnHqNK6JItgf0d662KxcW+4Of8q/6IMEumnXXtI1hO7tmiUl98qT/FQ4o1TcRL6X/WbQM23ItT17EwHwi4ZPR4gReOAl+HodbqWFDlg6FHOI2xs8CuZDUreb6RmTzOKdEwcPR94Vgl+vT2IJ2i/5LObQUe4d86jHvebqxFH8SbzvYvw==';
const mCust = 'P4I082220190001';

var pp;

async function init() {
  await Cidscan.initCaptureID(callback);
  this.subscription = captureIDHandlerEmitter.addListener(
    'decoderEvent',
    data => {
      console.log(JSON.stringify(data));
      pp.props.navigation.navigate('Home');
    },
  );
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
