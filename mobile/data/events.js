// Shared event data used across Home, Map, Profile, and EventDetail screens.
// Tapping a CardEvent navigates to the EventDetail route which looks up the
// entry by id here. Ported from the web app's src/data/events.js — image
// imports become require() calls against the copies in assets/shared/ (sourced
// from the web app's src/assets/images).

const imgCanyonCrew = { uri: 'https://static.figma.com/uploads/c4873192a4772ee39f42a888fd7cd802dd8f089b' };
const imgWeekendSurf = { uri: 'https://static.figma.com/uploads/73896fa4b194c87ed4d059f2ecd8f53b73930c0c' };
const imgTrailRun = { uri: 'https://static.figma.com/uploads/bcfff7e005c552916c9b288b5db25aa35f3f54b8' };
const imgMorningRun = { uri: 'https://static.figma.com/uploads/dac70bcf71da5d16f0edaeb9118f82dd45450d0c' };
const imgHorseback = { uri: 'https://static.figma.com/uploads/207e528bb7ce71025b9de246eeb7a72a562c449e' };

const imgHost1 = { uri: 'https://static.figma.com/uploads/8eb0c462ff293938b2f59327f4fddb5cceed1b1c' };
const imgHost2 = { uri: 'https://static.figma.com/uploads/48080c69f291b89e052c0d532eba87c3247125ec' };
const imgHost3 = { uri: 'https://static.figma.com/uploads/b2b04c73585681e09cafae2502ca6e2d7ea61c03' };
const imgHost4 = { uri: 'https://static.figma.com/uploads/d31ce0e0d5bf18c86a5a1dd86027ce2508dcbfd7' };
const imgHost6 = { uri: 'https://static.figma.com/uploads/2f2d3067dad7b641f28978c2ff0dea7bb5176622' };
const imgHost7 = { uri: 'https://static.figma.com/uploads/a8b0d4c796964d78e11d6452a6c0064f1bec8b10' };
const imgHost8 = { uri: 'https://static.figma.com/uploads/cf601dd20ef02c41fa9dc04898039f11d5db267d' };
const imgHost9 = { uri: 'https://static.figma.com/uploads/86285ada8df9f7b3d1dc73448bebeba29311b5f9' };
const imgHost10 = { uri: 'https://static.figma.com/uploads/ace28180a72c38ef678bf3a6496c7a07d7954dd6' };
const imgHost11 = { uri: 'https://static.figma.com/uploads/df86f316812bf0f561138a78a40685fc82b3f226' };

const defaultGuests = [imgHost7, imgHost8, imgHost9, imgHost10];

export const events = [
  {
    id: 'trail-run',
    title: 'Trail Run Meetup',
    location: 'Griffith Park',
    address: '3401 Riverside Dr, Los Angeles, CA',
    city: 'Los Angeles, CA',
    latitude: 34.1365,
    longitude: -118.2941,
    people: '24',
    time: '8:30PM – 12:00AM',
    month: 'JUL',
    day: '22',
    dateLong: 'Friday July 22 in Los Angeles',
    src: imgTrailRun,
    hero: imgTrailRun,
    description:
      'Join a fast-paced trail run in Rio de Los Angeles State Park. Expect to run in the 8-minute mile range, with moderate incline. Bring water and sunscreen!',
    host: { name: 'Jesse Gonzalez', avatar: imgHost1 },
    attendees: '24',
    duration: '2.5 Hrs',
    groupSize: 'Large',
    guests: defaultGuests,
    spotsLeft: '5 spots left',
    price: 'Free',
    cta: 'REGISTER',
  },
  {
    id: 'morning-run',
    title: 'Morning Run Meetup',
    location: 'Aliso Summit Trail, CA',
    address: 'Aliso Summit Trail, Aliso Viejo, CA',
    city: 'Aliso Viejo, CA',
    latitude: 33.5839,
    longitude: -117.7261,
    people: '64',
    time: '3:00PM – 4:30PM',
    month: 'JUN',
    day: '14',
    dateLong: 'Friday June 14 in Aliso Viejo',
    src: imgMorningRun,
    hero: imgMorningRun,
    description:
      'Easy social run along Aliso Summit Trail with stair training at the end. All paces welcome — we regroup at each turn so nobody runs alone.',
    host: { name: 'Mei Tanaka', avatar: imgHost2 },
    attendees: '64',
    duration: '1.5 Hrs',
    groupSize: 'Large',
    guests: defaultGuests,
    spotsLeft: '12 spots left',
    price: 'Free',
    cta: 'REGISTER',
  },
  {
    id: 'horseback',
    title: 'Horseback in Topanga',
    location: 'Topanga, CA',
    address: 'Topanga State Park, Topanga, CA',
    city: 'Topanga, CA',
    latitude: 34.0928,
    longitude: -118.6035,
    people: '35',
    time: '5:45PM – 7:45PM',
    month: 'JUN',
    day: '20',
    dateLong: 'Thursday June 20 in Topanga',
    src: imgHorseback,
    hero: imgHorseback,
    description:
      'Guided golden-hour ride through the chaparral canyons of Topanga State Park. Horses provided. Beginners welcome — short ground lesson before we head out.',
    host: { name: 'Karim Nasser', avatar: imgHost3 },
    attendees: '35',
    duration: '2 Hrs',
    groupSize: 'Small',
    guests: defaultGuests,
    spotsLeft: '3 spots left',
    price: '$45',
    cta: 'BOOK',
  },
  {
    id: 'weekend-surf',
    title: 'Weekend Surf Session',
    location: 'Ventura, CA',
    address: 'Surfers Point, Ventura, CA',
    city: 'Ventura, CA',
    latitude: 34.2746,
    longitude: -119.2967,
    people: '12',
    time: '6:30AM – 1:00PM',
    month: 'JUN',
    day: '12',
    dateLong: 'Saturday June 12 in Ventura',
    src: imgWeekendSurf,
    hero: imgWeekendSurf,
    description:
      'Long-form Saturday session at Surfers Point. Coffee at the parking lot at 6:30am, dawn patrol, then breakfast tacos after. Boards and wetsuits provided if needed.',
    host: { name: 'Amelia Brooks', avatar: imgHost4 },
    attendees: '12',
    duration: '6.5 Hrs',
    groupSize: 'Small',
    guests: defaultGuests,
    spotsLeft: '4 spots left',
    price: 'Free',
    cta: 'JOIN',
  },
  {
    id: 'canyon-crew',
    title: 'Canyon Crew Meetup',
    location: 'Topanga, CA',
    address: 'Topanga Lookout Trailhead, Topanga, CA',
    city: 'Topanga, CA',
    latitude: 34.0928,
    longitude: -118.6035,
    people: '35',
    time: '5:45PM – 7:45PM',
    month: 'JUN',
    day: '12',
    dateLong: 'Sunday June 12 in Topanga',
    src: imgCanyonCrew,
    hero: imgCanyonCrew,
    overlay: 'Canyon crew meetup',
    description:
      'Sunset crew hike up Topanga Lookout. Steady incline with a 360° view at the top. We hang out at the summit for golden hour then head down by headlamp.',
    host: { name: 'Sam Reyes', avatar: imgHost6 },
    attendees: '35',
    duration: '2 Hrs',
    groupSize: 'Medium',
    guests: [imgHost9, imgHost10, imgHost11],
    spotsLeft: '8 spots left',
    price: 'Free',
    cta: 'REGISTER',
  },
];

const byId = new Map(events.map((event) => [event.id, event]));

export function getEvent(id) {
  return byId.get(id) ?? events[0];
}
