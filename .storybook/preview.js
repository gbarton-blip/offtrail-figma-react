import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    // Provide a Router context so components using useNavigate / useLocation /
    // useParams render in Storybook without crashing. createElement is used
    // (instead of JSX) so this .js file doesn't need JSX transformation.
    (Story) =>
      createElement(MemoryRouter, { initialEntries: ['/'] }, createElement(Story)),
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Documentation',
          'Components', [
            'Branding', ['Logo', 'Wordmark'],
            'Avatar',
            'Facepile',
            'Icon',
            'BrandIcon',
            'Button',
            'IconButton',
            'Chip',
            'Form Fields', [
              'TextInput',
              'Textarea',
              'SearchInput',
              'Dropdown',
              'Checkbox',
              'Radio',
              'RadioGroup',
              'SwitchField',
            ],
            'Nav',
            'EventNav',
            'PageHeader',
            'CardEvent',
            'CardGuide',
            'Map', ['MapView', 'MapPin', 'MapUserLocation'],
            'WidgetCompass',
          ],
        ],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;