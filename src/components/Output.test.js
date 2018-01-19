import React from 'react';
import {shallow, mount} from 'enzyme';

import Output from './Output';

describe('<Output />', () => {
	it('Renders without crashing', () => {
		shallow(<Output />);
	});
	it('should render output', () => {
		const wrapper = shallow(<Output />);
		expect(wrapper.hasClass('output')).toEqual(true);
	});
});
