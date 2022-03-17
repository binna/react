import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

// import '../src/sass/materialize.scss';
import '../src/doit-ui/app.css'

function loadStories() {
    // require('../src/stories/InputStory');
    // require('../src/stories/NewCounterStory');
    const context = require.context('../src/stories', true, /Story\.jsx$/);

    context.keys().forEach(srcFile => {
        interopRequireDefault(context(srcFile));
    });
}

setAddon(JSXAddon);
configure(loadStories, module);