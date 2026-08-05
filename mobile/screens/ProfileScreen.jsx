import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../components/Avatar/Avatar';
import Button from '../components/Button/Button';
import TileCallout from '../components/TileCallout/TileCallout';
import CardEvent from '../components/CardEvent/CardEvent';
import Nav from '../components/Nav/Nav';
import useTheme from '../theme/useTheme';
import { sizes, fonts } from '../theme/tokens';
import { getEvent } from '../data/events';

const imgAvatar = { uri: 'https://static.figma.com/uploads/a760126f639ca34680e11f727e7593119d9c44fe' };

const upcoming = getEvent('morning-run');
const past = getEvent('horseback');

// Ported from src/Profile.jsx.
export default function ProfileScreen({ navigation }) {
  const t = useTheme();
  const openEvent = (id) => navigation.navigate('EventDetail', { eventId: id });

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: t.bgBrandPrimary }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Avatar + identity */}
        <View style={styles.avatarSection}>
          <View style={styles.header}>
            <View style={styles.user}>
              <Text style={[styles.name, { color: t.colorPrimary }]}>KALEY B.</Text>
              <Text style={[styles.location, { color: t.colorSecondary }]}>LOS ANGELES, CA</Text>
            </View>
            <Avatar src={imgAvatar} size={80} />
          </View>
          <View style={styles.actions}>
            <Button label="Edit" colour="transparent-white" size="medium" />
            <Button label="Share" colour="transparent-white" size="medium" />
          </View>
        </View>

        {/* Event highlights */}
        <View style={styles.stats}>
          <TileCallout variant="Highlight" label="HOSTED" value="12" style={styles.stat} />
          <TileCallout variant="Highlight" label="FOLLOWERS" value="148" style={styles.stat} />
          <TileCallout variant="Highlight" label="HOST RATING" value="4.9" style={styles.stat} />
        </View>

        {/* Upcoming events */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: t.colorPrimary }]}>Upcoming events</Text>
          <CardEvent
            src={upcoming.src}
            title={upcoming.title}
            location={upcoming.location}
            people={upcoming.people}
            time={upcoming.time}
            size="large"
            month={upcoming.month}
            day={upcoming.day}
            onPress={() => openEvent(upcoming.id)}
          />
        </View>

        {/* Past events */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: t.colorPrimary }]}>Past events</Text>
          <CardEvent
            src={past.src}
            title={past.title}
            location={past.location}
            people={past.people}
            time={past.time}
            size="large"
            month={past.month}
            day={past.day}
            onPress={() => openEvent(past.id)}
          />
        </View>
      </ScrollView>

      <Nav active="Profile" onNavigate={(key) => navigation.navigate(key)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { gap: sizes.padXlarge, padding: sizes.padMedium },
  avatarSection: { gap: sizes.gapMedium, width: '100%' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  user: { gap: sizes.padXxsmall, justifyContent: 'center' },
  name: { fontFamily: fonts.headline, fontSize: sizes.fontDisplay, lineHeight: sizes.fontDisplay },
  location: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  actions: { flexDirection: 'row', gap: sizes.padXsmall, alignItems: 'center' },
  stats: { flexDirection: 'row', gap: sizes.padXsmall, alignItems: 'stretch', width: '100%' },
  stat: { flex: 1, width: 'auto', minWidth: 0 },
  section: { gap: sizes.padMedium, width: '100%' },
  sectionTitle: { fontFamily: fonts.sansMedium, fontSize: sizes.fontLarge, lineHeight: sizes.fontLarge * 1.3 },
});
