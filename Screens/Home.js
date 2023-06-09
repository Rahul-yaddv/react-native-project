import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';

export default function Home() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={ImageStyle.mainContainer}>
      <ImageBackground
        resizeMode='cover'
        source={require('../assets/Assets/award_bg.png')}
        style={ImageStyle.backgroundImage}
      >
        <Image
          source={require('../assets/Assets/castingLogo.png')}
          style={ImageStyle.castImage}
        ></Image>
      </ImageBackground>
    </View>
  );
}
// girlClap.png
const ImageStyle = StyleSheet.create({
  mainContainer: {
    overflow: 'hidden',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  castImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});
