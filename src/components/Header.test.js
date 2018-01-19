import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	});
	it('should render header', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.hasClass('header')).toEqual(true);
	});
});