import Facepile from './Facepile'
import Avatar from '../Avatar/Avatar'

export default {
  title: 'Components/Facepile',
  component: Facepile,
}

export const Default = {
  render: () => (
    <Facepile>
      <Avatar src="https://i.pravatar.cc/112?u=1" size={56} alt="User 1" />
      <Avatar src="https://i.pravatar.cc/112?u=2" size={56} alt="User 2" />
      <Avatar src="https://i.pravatar.cc/112?u=3" size={56} alt="User 3" />
    </Facepile>
  ),
}

export const TwoAvatars = {
  render: () => (
    <Facepile>
      <Avatar src="https://i.pravatar.cc/112?u=4" size={56} alt="User 1" />
      <Avatar src="https://i.pravatar.cc/112?u=5" size={56} alt="User 2" />
    </Facepile>
  ),
}

export const FiveAvatars = {
  render: () => (
    <Facepile>
      <Avatar src="https://i.pravatar.cc/112?u=6" size={56} alt="User 1" />
      <Avatar src="https://i.pravatar.cc/112?u=7" size={56} alt="User 2" />
      <Avatar src="https://i.pravatar.cc/112?u=8" size={56} alt="User 3" />
      <Avatar src="https://i.pravatar.cc/112?u=9" size={56} alt="User 4" />
      <Avatar src="https://i.pravatar.cc/112?u=10" size={56} alt="User 5" />
    </Facepile>
  ),
}
