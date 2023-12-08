import harmony from 'eslint-config-harmony';

harmony.forEach((config) => {
  if (config.ignores) {
    config.ignores.push('./components/ui/**/*');
  } else {
    config.ignores = ['./components/ui/**/*'];
  }
});

export default harmony;
