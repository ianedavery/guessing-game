import React from 'react';
import {shallow, mount} from 'enzyme';

import Newgame from './Newgame';

describe('<Newgame />', () => {
	it('Renders without crashing', () => {
		shallow(<Newgame />);
	});
	it('should show the new game button', () => {
		const wrapper = shallow(<Newgame />);
		expect(wrapper.hasClass('new-game-button')).toEqual(true);
	});
});