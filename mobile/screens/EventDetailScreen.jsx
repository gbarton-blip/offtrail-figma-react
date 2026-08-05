import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from '../components/IconButton/IconButton';
import TileCallout from '../components/TileCallout/TileCallout';
import TileDate from '../components/TileDate/TileDate';
import Avatar from '../components/Avatar/Avatar';
import MapView from '../components/MapView/MapView';
import Button from '../components/Button/Button';
import Facepile from '../components/Facepile/Facepile';
import Carousel from '../components/Carousel/Carousel';
import EventNav from '../components/EventNav/EventNav';
import useTheme from '../theme/useTheme';
import { sizes, fonts } from '../theme/tokens';
import { getEvent } from '../data/events';

// Ported from src/EventDetail.jsx. The web CSS slide transition is replaced by
// the native stack push/pop animation.
export default function EventDetailScreen({ navigation, route }) {
  const t = useTheme();
  const insets = useSafeAreaInsets();
  const event = getEvent(route.params?.eventId);

  return (
    <View style={[styles.screen, { backgroundColor: t.bgBrandSecondary }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Hero */}
        <View style={styles.hero}>
          <Image source={event.hero} style={styles.heroImage} resizeMode="cover" />
          <View style={[StyleSheet.absoluteFill, { backgroundColor: t.black400 }]} pointerEvents="none" />

          <View style={[styles.titleBar, { top: insets.top + sizes.padMedium }]}>
            <IconButton glyph="caret" variant="neutral" size="medium" flip onPress={() => navigation.goBack()} />
            <IconButton glyph="share" variant="neutral" size="medium" />
          </View>

          <Text style={styles.title}>{String(event.title).toUpperCase()}</Text>
        </View>

        {/* Body */}
        <View style={styles.content}>
          {/* Good to Know */}
          <View style={styles.section}>
            <Text style={[styles.label, { color: t.colorPrimary }]}>GOOD TO KNOW</Text>
            <Carousel>
              <TileCallout variant="Subtle" label="Attendees" value={event.attendees} />
              <TileCallout variant="Subtle" label="Duration" value={event.duration} />
              <TileCallout variant="Subtle" label="Group size" value={event.groupSize} />
            </Carousel>
          </View>

          {/* When */}
          <View style={styles.section}>
            <Text style={[styles.label, { color: t.colorPrimary }]}>WHEN</Text>
            <View style={styles.when}>
              <TileDate month={event.month} day={event.day} />
              <View style={styles.whenText}>
                <Text style={[styles.body, { color: t.colorSecondary }]}>{event.dateLong}</Text>
                <Text style={[styles.body, { color: t.colorSecondary }]}>{event.time}</Text>
              </View>
            </View>
          </View>

          {/* Hosted By */}
          <View style={styles.section}>
            <Text style={[styles.label, { color: t.colorPrimary }]}>HOSTED BY</Text>
            <View style={styles.host}>
              <Avatar src={event.host.avatar} size={56} />
              <Text style={[styles.body, { color: t.colorPrimary }]}>{event.host.name}</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={[styles.label, { color: t.colorPrimary }]}>DESCRIPTION</Text>
            <Text style={[styles.body, { color: t.colorSecondary }]}>{event.description}</Text>
          </View>

          {/* Where */}
          <View style={styles.section}>
            <Text style={[styles.label, { color: t.colorPrimary }]}>WHERE</Text>
            <View style={styles.whereText}>
              <Text style={[styles.body, { color: t.colorPrimary }]}>{event.location}</Text>
              <Text style={[styles.body, { color: t.colorSecondary }]}>{event.address}</Text>
            </View>
            <MapView
              style={styles.whereMap}
              interactive={false}
              showUserLocation={false}
              latitude={event.latitude}
              longitude={event.longitude}
              zoom={14}
            />
          </View>

          {/* Guest List */}
          <View style={styles.section}>
            <Text style={[styles.label, { color: t.colorPrimary }]}>GUEST LIST</Text>
            <View style={styles.guests}>
              <Facepile>
                {event.guests.map((src, i) => (
                  <Avatar key={i} src={src} size={40} />
                ))}
              </Facepile>
              <Button label="View All" colour="transparent-white" size="medium" />
            </View>
            <Text style={[styles.body, { color: t.colorSecondary }]}>{event.spotsLeft}</Text>
          </View>
        </View>
      </ScrollView>

      <EventNav price={event.price} time={event.time} location={event.city} buttonLabel={event.cta} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scroll: { paddingBottom: 0 },
  hero: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroImage: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' },
  titleBar: {
    position: 'absolute',
    left: sizes.padMedium,
    right: sizes.padMedium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  title: {
    fontFamily: fonts.headline,
    fontSize: sizes.font7xl,
    lineHeight: sizes.font7xl,
    color: '#ffffff',
    textAlign: 'center',
    width: '100%',
    paddingHorizontal: sizes.padMedium,
  },
  content: { gap: sizes.padXlarge, padding: sizes.padMedium, paddingBottom: sizes.padXxlarge },
  section: { gap: sizes.padXsmall, width: '100%' },
  label: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  body: { fontFamily: fonts.sans, fontSize: sizes.fontMedium, lineHeight: sizes.fontMedium * 1.4 },
  when: { flexDirection: 'row', gap: sizes.gapSmall, alignItems: 'center' },
  whenText: { gap: sizes.gapXsmall, flex: 1 },
  host: { flexDirection: 'row', gap: sizes.gapSmall, alignItems: 'center' },
  whereText: { gap: sizes.gapXsmall, marginBottom: sizes.gapSmall },
  whereMap: { width: '100%', height: 160, borderRadius: sizes.cornerMedium },
  guests: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
});
