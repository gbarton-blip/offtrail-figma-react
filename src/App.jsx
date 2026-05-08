import { Avatar } from "./components/Avatar";
import { Button } from "./components/Button";
import { IconButton } from "./components/IconButton";
import { TextInput } from "./components/TextInput";
import { Chip } from "./components/Chip";
import { CardEvent } from "./components/CardEvent";
import { Logo, Wordmark } from "./components/Branding";
import {
  Textarea,
  Dropdown,
  SwitchField,
  CheckboxField,
  RadioField,
  SearchInput,
} from "./components/FormComponents";
import {
  AppNav,
  WebNav,
  Toast,
  BottomSheet,
  EmptyState,
  TileDate,
  TileCommunity,
  TileWeather,
  TileCallout,
  TileLocation,
  MapCanvas,
  Footer,
} from "./components/SystemComponents";

export default function App() {
  return (
    <main className="ot-page">
      <header className="ot-section">
        <h1>Offtrail Components</h1>
        <div className="ot-row">
          <Logo />
          <Wordmark />
        </div>
      </header>

      <section className="ot-section">
        <h2>Avatar</h2>
        <div className="ot-row">
          <Avatar size={80} />
          <Avatar size={56} />
          <Avatar size={40} />
          <Avatar size={32} />
        </div>
      </section>

      <section className="ot-section">
        <h2>Buttons</h2>
        <div className="ot-row">
          <Button label="Button" colour="brand" size="large" icon />
          <Button label="Button" colour="transparent-white" size="medium" />
          <Button label="Button" colour="transparent-black" size="medium" icon />
        </div>
        <div className="ot-row">
          <IconButton variant="primary" size="medium" />
          <IconButton variant="outline" size="medium" />
          <IconButton variant="neutral" size="small" />
        </div>
      </section>

      <section className="ot-section">
        <h2>Inputs + Chips</h2>
        <TextInput label="Label" value="Value" description="Description" dropdown />
        <Textarea />
        <Dropdown />
        <SearchInput />
        <div className="ot-row">
          <Chip label="Surf" active />
          <Chip label="Trail" active={false} />
        </div>
        <SwitchField active />
        <CheckboxField active />
        <RadioField />
      </section>

      <section className="ot-section">
        <h2>Card / Event</h2>
        <CardEvent size="large" />
        <CardEvent size="small" />
      </section>

      <section className="ot-section">
        <h2>Tiles + Map</h2>
        <div className="ot-row">
          <TileDate />
          <TileCommunity />
          <TileCallout />
          <TileCallout highlight value="High" />
        </div>
        <TileWeather />
        <div className="ot-row">
          <TileLocation mode="dark" />
          <TileLocation mode="light" />
        </div>
        <MapCanvas />
      </section>

      <section className="ot-section">
        <h2>Navigation + Overlays</h2>
        <WebNav />
        <WebNav translucent />
        <AppNav />
        <div className="ot-row">
          <Toast />
          <BottomSheet />
          <BottomSheet size="tall" />
        </div>
        <EmptyState />
      </section>

      <section className="ot-section">
        <h2>Footer</h2>
        <Footer />
        <Footer compact />
      </section>
    </main>
  );
}
