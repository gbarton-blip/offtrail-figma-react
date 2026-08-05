import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

// Ported from src/components/MapPin/MapPin.jsx. The two fills are fixed brand
// orange values (orange-400 teardrop, orange-600 dot), matching the web source.
// The CSS drop-shadow becomes a native View shadow on the wrapper.
export default function MapPin({ width = 20, height = 37 }) {
  return (
    <View style={styles.wrap}>
      <Svg width={width} height={height} viewBox="0 0 20.001 37" fill="none">
        <Path
          d="M10.001 0C15.5236 0.000263878 20.001 4.47732 20.001 10C20.001 12.4223 19.1396 14.6434 17.7065 16.3738C14.7425 19.9526 10.501 23.6373 10.501 28.2841V36.5C10.501 36.7761 10.2771 37 10.001 37C9.72483 37 9.50098 36.7761 9.50098 36.5V28.2845C9.50098 23.6376 5.25915 19.9529 2.29486 16.3742C0.861519 14.6438 0 12.4225 0 10C0 4.47715 4.47813 0 10.001 0Z"
          fill="#FF932E"
        />
        <Circle cx={10} cy={10} r={5.4545} fill="#EFE5CD" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: 20,
    height: 37,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.17,
    shadowRadius: 3,
    elevation: 4,
  },
});
