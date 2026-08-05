import { useNavigate } from 'react-router-dom'
import Logo from './components/ui/Logo/Logo'
import Button from './components/ui/Button/Button'
const heroImage = 'https://static.figma.com/uploads/0cad32c7d724784c58698e7e6205be0099774608'
import './App.css'

function App() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <div className="landing__content">
        <div className="landing__hero">
          <img
            className="landing__hero-image"
            src={heroImage}
            alt="Hikers walking along a mountain trail"
          />
          <div className="landing__scrim" />
          <Logo className="landing__logo" />
          <div className="landing__text">
            <p className="landing__text-primary">Welcome to Offtrail.</p>
            <p className="landing__text-secondary">
              A community built for those who take the scenic route.
            </p>
          </div>
          <div className="landing__buttons">
            <Button label="Sign Up" colour="brand" size="large" />
            <Button
              label="SIGN IN"
              colour="transparent-white"
              size="large"
              onClick={() => navigate('/home')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
