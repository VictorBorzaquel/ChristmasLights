import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function UISlider({ title, width, value, onValueChange, minimumValue, maximumValue }: {
  title: string;
  width: number;
  value: number;
  minimumValue: number;
  maximumValue: number;
  onValueChange(number: number): void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Slider
        style={{
          width: width - 40,
          height: 40,
        }}
        value={value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#a1a1a1"
        thumbTintColor="#a889ff"
        onValueChange={onValueChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  title: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 20
  }
})