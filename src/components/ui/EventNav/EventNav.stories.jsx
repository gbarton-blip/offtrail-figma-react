import EventNav from './EventNav'

export default {
  title: 'Components/EventNav',
  component: EventNav,
  argTypes: {
    price: { control: 'text' },
    time: { control: 'text' },
    location: { control: 'text' },
    buttonLabel: { control: 'text' },
  },
}

export const Default = {
  args: {
    price: 'Free',
    time: '8:30PM–12:00AM',
    location: 'Los Angeles, CA',
    buttonLabel: 'REGISTER',
  },
}

export const PaidEvent = {
  args: {
    price: '$25',
    time: '7:00PM–11:00PM',
    location: 'San Francisco, CA',
    buttonLabel: 'BUY TICKETS',
  },
}
