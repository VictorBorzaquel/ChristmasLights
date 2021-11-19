import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, Easing, useDerivedValue, interpolateColors, withTiming, withRepeat } from 'react-native-reanimated';

export type TColor = 'red' | 'yellow' | 'blue' | 'green' | 'pink';

export function Circle({ color, duration, size }: {
  color: TColor;
  duration: number;
  size: number;
}) {
  const progress = useSharedValue(0.5)

  const animationStyle = useAnimatedStyle(() => ({ opacity: progress.value }), [])

  function getInit() {
    switch (color) {
      case 'red': return 100
      case 'yellow': return 300
      case 'blue': return 400
      case 'green': return 200
      case 'pink': return 500
      default: return 600
    }
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    base: {
      height: size / 3,
      width: size / 2,
      backgroundColor: '#5e5e5e',
      zIndex: 2,
      borderTopLeftRadius: (size / 10),
      borderTopRightRadius: (size / 10),
    },
    stem: {
      borderBottomColor: '#5e5e5e',
      borderBottomWidth: (size / 20),
      width: size / 2.5,
      height: (size / 10),
      backgroundColor: '#333',
      zIndex: 1,
      marginBottom: -(size / 5),
    },
    circle: {
      height: size,
      width: size,
      borderRadius: size / 2,
      transform: [{scaleX: 0.5}]
    },
    red: {
      backgroundColor: '#fc3e3e',
    },
    yellow: {
      backgroundColor: '#ebff3b',
    },
    blue: {
      backgroundColor: '#3988ff',
    },
    green: {
      backgroundColor: '#58ff37',
    },
    pink: {
      backgroundColor: '#ee37ff',
    }
  })

  useEffect(() => {
    setTimeout(() => {
      progress.value = 0.5
      progress.value = withRepeat(withTiming(1, { duration }), -1, true)
    }, getInit())
  }, [duration])


  return (
    <View style={styles.container}>
      <View style={styles.base} />
      <View style={styles.stem} />
      <Animated.View style={[styles.circle, styles[color], animationStyle]} />
    </View>
  );
}
