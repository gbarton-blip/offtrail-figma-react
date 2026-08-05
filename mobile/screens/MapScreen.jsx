import { View, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView from '../components/MapView/MapView';
import SearchInput from '../components/SearchInput/SearchInput';
import Chip from '../components/Chip/Chip';
import BottomSheet from '../components/BottomSheet/BottomSheet';
import CardEvent from '../components/CardEvent/CardEvent';
import Nav from '../components/Nav/Nav';
import useTheme from '../theme/useTheme';
import { sizes } from '../theme/tokens';
import { getEvent } from '../data/events';

const FILTERS = ['For You', 'Yoga', 'Surfing', 'Biking', 'Meditation'];
const EVENT_IDS = ['weekend-surf', 'morning-run', 'horseback'];

// Ported from src/Map.jsx.
export default function MapScreen({ navigation }) {
  const t = useTheme();
  const insets = useSafeAreaInsets();
  const events = EVENT_IDS.map(getEvent);

  return (
    <View style={[styles.screen, { backgroundColor: t.bgBrandPrimary }]}>
      <View style={styles.mapRegion}>
        <MapView
          style={StyleSheet.absoluteFill}
          latitude={34.07}
          longitude={-118.25}
          zoom={12}
          interactive
          showUserLocation
          markers={[
            { id: '1', lng: -118.27, lat: 34.09 },
            { id: '2', lng: -118.22, lat: 34.06 },
          ]}
        />

        <View style={[styles.search, { top: insets.top + sizes.padMedium }]} pointerEvents="box-none">
          <SearchInput placeholder="Find things to do..." />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabs}
          contentContainerStyle={styles.tabsContent}
        >
          {FILTERS.map((label, i) => (
            <Chip key={label} label={label} active={i === 0} />
          ))}
        </ScrollView>
      </View>

      <BottomSheet size="Default">
        <View style={styles.events}>
          {events.map((event) => (
            <CardEvent
              key={event.id}
              size="small"
              src={event.src}
              title={event.title}
              location={event.location}
              people={event.people}
              time={event.time}
              month={event.month}
              day={event.day}
              onPress={() => navigation.navigate('EventDetail', { eventId: event.id })}
            />
          ))}
        </View>
      </BottomSheet>

      <Nav active="Map" onNavigate={(key) => navigation.navigate(key)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  mapRegion: { flex: 1, position: 'relative', overflow: 'hidden' },
  search: { position: 'absolute', left: 0, right: 0, alignItems: 'center', zIndex: 1 },
  tabs: { position: 'absolute', bottom: sizes.padXsmall, left: 0, right: 0, zIndex: 1 },
  tabsContent: { gap: sizes.gapSmall, paddingHorizontal: sizes.padSmall },
  events: { gap: sizes.gapMedium, paddingHorizontal: sizes.padMedium },
});
