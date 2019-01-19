import {
	configure,
	addDecorator
} from '@storybook/html';

import {
	setOptions
} from '@storybook/addon-options';

import {
	withOptions
} from '@storybook/addon-options';

setOptions({
	hierarchyRootSeparator: /\|/,
	downPanelInRight: true
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
	// Make welcome story default
	require('../stories/index.stories');
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
