import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Circle, TColor } from '../../components/Circle';
import { useWindowDimensions } from 'react-native';
import { UISlider } from '../../components/UISlider';

export function Home() {
  const [duration, setDuration] = useState(100)
  const [size, setSize] = useState(60)
  const [quant, setQuant] = useState(5)

  const { width } = useWindowDimensions()

  const colors = ['red', 'yellow', 'blue', 'green', 'pink'] as TColor[]

  function lamps() {
    const lamps = [] as TColor[]
    for (let i = 0, currColor = 0; i < quant; i++, currColor++) {
      if (colors.length === currColor) currColor = 0
      lamps.push(colors[currColor])
    }
    return lamps
  }

  function handleSlider(value: number) {
    setQuant(value)
    setSize(width / value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {lamps().map((color, index) => (
          <Circle key={index} color={color} duration={duration} size={size} />
        ))}
      </View>
      <View style={styles.slider}>
        <UISlider
          minimumValue={1000}
          maximumValue={50}
          onValueChange={setDuration}
          title='Intensidade'
          value={duration}
          width={width}
        />
        <UISlider
          minimumValue={1}
          maximumValue={20}
          onValueChange={handleSlider}
          title='Quantidade'
          value={quant}
          width={width}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    borderTopColor: '#5e5e5e',
    borderTopWidth: 5
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  slider: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30
  }
})