import React from 'react';
import {shallow, mount} from 'enzyme';

import Input from './Input';

describe('<Input />', () => {
	it('Renders without crashing', () => {
		shallow(<Input />);
	});
	it('should render guess form', () => {
		const wrapper = shallow(<Input />);
		expect(wrapper.hasClass('guess-form')).toEqual(true);
	});
});