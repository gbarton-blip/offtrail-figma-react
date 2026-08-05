import { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import useTheme from '../../theme/useTheme';

// Ported from src/components/MapUserLocation/MapUserLocation.jsx. The CSS
// @keyframes pulse becomes an Animated loop on the inner ring.
export default function MapUserLocation({ size = 'large' }) {
  const t = useTheme();
  const dim = size === 'large' ? 175 : 129;
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(anim, { toValue: 1, duration: 1500, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(anim, { toValue: 0, duration: 1500, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [anim]);

  const scale = anim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.15] });
  const opacity = anim.interpolate({ inputRange: [0, 1], outputRange: [1, 0.6] });

  return (
    <View style={[styles.wrap, { width: dim, height: dim }]}>
      {/* Warm radial glow (approximated with a soft translucent disc) */}
      <View style={[styles.glow, { backgroundColor: 'rgba(231,111,0,0.25)' }]} />
      {/* Pulsing ring */}
      <Animated.View
        style={[
          styles.pulse,
          { backgroundColor: 'rgba(255,147,46,0.2)', transform: [{ scale }], opacity },
        ]}
      />
      {/* Center dot */}
      <View style={[styles.dot, { backgroundColor: t.colorBrandTertiary, borderColor: t.white100 }]} />
    </View>
  );
}

MapUserLocation.sizes = ['large', 'small'];

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', justifyContent: 'center' },
  glow: { ...StyleSheet.absoluteFillObject, borderRadius: 9999 },
  pulse: { position: 'absolute', top: '15%', left: '15%', right: '15%', bottom: '15%', borderRadius: 9999 },
  dot: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
  },
});
