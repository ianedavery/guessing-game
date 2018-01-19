import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './Feedback';

describe('<Feedback />', () => {
	it('Renders without crashing', () => {
		shallow(<Feedback />);
	});
	it('should show feedback', () => {
		const wrapper = shallow(<Feedback />);
		expect(wrapper.hasClass('feedback-wrapper')).toEqual(true);
	});
});