import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MessengerMessageUs from '../MessengerMessageUs';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  MessengerMessageUs.prototype.loadSdkAsynchronously = jest.fn();
});

describe('<MessengerMessageUs />', () => {
  it('render page_id to DOM element', () => {
    const wrapper = mount(
      <MessengerMessageUs pageId="<PAGE_ID>" appId="<APP_ID>" />
    );
    expect(
      wrapper
        .render()
        .find('.fb-messengermessageus')
        .prop('page_id')
    ).toBe('<PAGE_ID>');
  });

  it('render color to DOM element', () => {
    const wrapper = mount(
      <MessengerMessageUs pageId="<PAGE_ID>" appId="<APP_ID>" color="white" />
    );
    expect(
      wrapper
        .render()
        .find('.fb-messengermessageus')
        .prop('color')
    ).toBe('white');
  });

  it('render size to DOM element', () => {
    const wrapper = mount(
      <MessengerMessageUs pageId="<PAGE_ID>" appId="<APP_ID>" size="xlarge" />
    );
    expect(
      wrapper
        .render()
        .find('.fb-messengermessageus')
        .prop('size')
    ).toBe('xlarge');
  });

  it('define fbAsyncInit and call loadSdkAsynchronously when facebook-jssdk does not exist', () => {
    mount(<MessengerMessageUs pageId="<PAGE_ID>" appId="<APP_ID>" />);

    expect(global.fbAsyncInit).toBeDefined();
    expect(MessengerMessageUs.prototype.loadSdkAsynchronously).toBeCalled();
  });

  it('should not call loadSdkAsynchronously when facebook-jssdk exists', () => {
    const div = global.document.createElement('div');
    div.id = 'facebook-jssdk';
    global.document.body.appendChild(div);

    mount(<MessengerMessageUs pageId="<PAGE_ID>" appId="<APP_ID>" />);

    expect(MessengerMessageUs.prototype.loadSdkAsynchronously).not.toBeCalled();
  });

  it('define fbAsyncInit and call loadSdkAsynchronously when facebook-jssdk does not exist', () => {
    global.FB = {
      init: jest.fn(),
    };

    mount(
      <MessengerMessageUs
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        autoLogAppEvents
        xfbml
        version="2.11"
      />
    );

    global.fbAsyncInit();

    expect(global.FB.init).toBeCalledWith({
      appId: '<APP_ID>',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.11',
    });
  });
});
