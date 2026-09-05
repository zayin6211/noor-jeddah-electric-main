import {
  index,
  route,
} from '@react-router/dev/routes'

export default [
  index('./home.jsx'),

  route('services', './services.jsx'),

  route(
    'services/electrical-foundation',
    './services/electrical-foundation.jsx',
  ),

  route(
    'services/electrical-wiring',
    './services/electrical-wiring.jsx',
  ),

  route(
    'services/electrical-finishing',
    './services/electrical-finishing.jsx',
  ),

  route(
    'services/lighting',
    './services/lighting.jsx',
  ),

  route('contact', './contact.jsx'),

  route('*', './not-found.jsx'),
]