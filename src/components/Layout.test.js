import React from 'react';
import {shallow, mount} from 'enzyme';

import Layout from './Layout';

describe('<Layout />', () => {
	it('Renders without crashing', () => {
		shallow(<Layout />);
	});
	it('should show the main content', () => {
		const wrapper = shallow(<Layout />);
		expect(wrapper.hasClass('main')).toEqual(true);
	});
});