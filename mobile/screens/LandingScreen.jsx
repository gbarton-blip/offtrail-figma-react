import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '../components/Logo/Logo';
import Button from '../components/Button/Button';
import useTheme from '../theme/useTheme';
import { sizes, fonts } from '../theme/tokens';

const heroImage = { uri: 'https://static.figma.com/uploads/0cad32c7d724784c58698e7e6205be0099774608' };

// Ported from src/App.jsx. The image + scrim are the FIRST children inside the
// flex container and the logo/text/buttons follow as later siblings, so they
// paint on top of the (absolutely-positioned) hero image. Keeping them in one
// container — rather than as separate absolute-fill siblings — is what makes the
// overlay reliable across RN's New Architecture.
export default function LandingScreen({ navigation }) {
  const t = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.hero, { backgroundColor: t.bgBrandPrimary, paddingBottom: insets.bottom + sizes.padMedium }]}>
      <Image source={heroImage} style={styles.heroImage} resizeMode="cover" />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.76)']}
        style={styles.scrim}
        pointerEvents="none"
      />

      <Logo color="#ffffff" />
      <View style={styles.text}>
        <Text style={styles.textPrimary}>Welcome to Offtrail.</Text>
        <Text style={styles.textSecondary}>
          A community built for those who take the scenic route.
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button label="Sign Up" colour="brand" size="large" />
        <Button
          label="SIGN IN"
          colour="transparent-white"
          size="large"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: sizes.gapXlarge,
    padding: sizes.padMedium,
  },
  heroImage: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%' },
  scrim: { position: 'absolute', left: 0, right: 0, bottom: 0, height: '50%' },
  text: { gap: 2 },
  textPrimary: { color: '#ffffff', fontFamily: fonts.sansMedium, fontSize: sizes.fontLarge, lineHeight: sizes.fontLarge * 1.3 },
  textSecondary: { color: 'rgba(255,255,255,0.6)', fontFamily: fonts.sansMedium, fontSize: sizes.fontLarge, lineHeight: sizes.fontLarge * 1.3 },
  buttons: { flexDirection: 'row', gap: sizes.padXsmall },
});
