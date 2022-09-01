import {StyleSheet, View, Dimensions, Animated, StatusBar} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LoadedPage from './LoadedPage';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SCREEN_HEIGHT = Dimensions.get('window').height;
StatusBar.setBackgroundColor('transparent');
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

const Chall001 = () => {
  const scale = useRef(new Animated.Value(20)).current;
  const transY = useRef(new Animated.Value(-(SCREEN_HEIGHT / 1.5))).current;
  const loadedpagetransY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(transY, {
        toValue: 0,
        bounciness: 18,
        useNativeDriver: false,
      }),
      Animated.spring(scale, {
        useNativeDriver: false,
        toValue: 35,
        bounciness: 18,
      }),
      Animated.spring(scale, {
        useNativeDriver: false,
        toValue: 60,
        bounciness: 20,
      }),

      Animated.timing(scale, {
        useNativeDriver: false,
        toValue: SCREEN_HEIGHT,
        duration: 200,
      }),
      Animated.spring(loadedpagetransY, {
        useNativeDriver: false,
        toValue: 0,
        duration: 15000,
        delay: 500,
      }),
    ]).start();
  }, []);

  const styles = StyleSheet.create({
    circle: {
      borderRadius: scale.interpolate({
        inputRange: [20, SCREEN_HEIGHT - 1, SCREEN_HEIGHT],
        outputRange: [360, 360, 0],
      }),
      width: scale.interpolate({
        inputRange: [20, SCREEN_WIDTH, SCREEN_HEIGHT],
        outputRange: [20, SCREEN_WIDTH, SCREEN_WIDTH],
      }),
      height: scale,
      overflow: 'hidden',
      transform: [{translateY: transY}],
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    linearGradient: {
      flex: 1,
    },
    loadedpage: {
      flex: 1,
      transform: [{translateY: loadedpagetransY}],
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View style={styles.circle}>
        <LinearGradient
          colors={['#ff6e40', '#83457c', '#283593']}
          style={styles.linearGradient}>
          <Animated.View style={styles.loadedpage}>
            <LoadedPage />
          </Animated.View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

export default Chall001;
