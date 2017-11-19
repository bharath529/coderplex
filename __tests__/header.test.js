import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/common/header';

describe('Testing Header of `components/header`', () => {
  const shallowWrapper = shallow(<Header />);

  it('Check the snapshot', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
  /**
   * Disable for now
    it('should have title tag rendered', () => {
      expect(shallowWrapper.find('h1').length).toBe(1);
    });

    it('should have subtitle tag rendered', () => {
      expect(shallowWrapper.find('h2').length).toBe(1);
    });

    describe('should render the props', () => {
      const pageTitle = 'title of the page';
      const pageSubTitle = 'Subtitle of the page';
      const rootWrapper = shallow(<CommonBanner pageTitle={pageTitle} pageSubTitle={pageSubTitle} />);

      it('should display title', () => {
        const headerElement = rootWrapper.find('.headline');
        expect(headerElement.props().children).toEqual(pageTitle);
      });

      it('should display subtitle', () => {
        const subHeaderElement = rootWrapper.find('h2');
        expect(subHeaderElement.props().children).toEqual(pageSubTitle);
      });
    });
   */
});
