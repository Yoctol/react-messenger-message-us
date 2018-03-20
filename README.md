# React Messenger Message Us

> React component for messenger message us lugin

[![npm](https://img.shields.io/npm/v/react-messenger-message-us.svg?style=flat-square)](https://www.npmjs.com/package/react-messenger-message-us)
[![Build Status](https://travis-ci.org/Yoctol/react-messenger-message-us.svg?branch=master)](https://travis-ci.org/Yoctol/react-messenger-message-us)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Screenshot

![](https://user-images.githubusercontent.com/3382565/37636056-82b65fda-2c3a-11e8-92e4-df0121a0044f.png)

## Prerequisite

Whitelist your domain to connect your Facebook Page to your website via the
Facebook tool.

* From UI: Facebook Page Settings > Messenger Platform > Whitelisted Domains
* From API: Use HTTP API or API client likes
  [messaging-api-messenger](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-messenger#setwhitelisteddomainsdomains)

## Installation

```sh
npm install react-messenger-message-us
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import MessengerMessageUs from 'react-messenger-message-us';

ReactDOM.render(
  <MessengerMessageUs pageId="<PAGE_ID>" appId="<APP_ID>" />,
  document.getElementById('demo')
);
```

> Note: It will handle sdk initialize automatically for you. See more details in
> [fbsdk official docs](https://developers.facebook.com/docs/javascript/quickstart/).

## Props

```js
static propTypes = {
  pageId: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,

  color: PropTypes.string,
  size: PropTypes.string,
  autoLogAppEvents: PropTypes.bool,
  xfbml: PropTypes.bool,
  version: PropTypes.string,
  language: PropTypes.string,
  debug: PropTypes.bool,
};

static defaultProps = {
  color: 'blue',
  size: 'large',
  autoLogAppEvents: true,
  xfbml: true,
  version: '2.11',
  language: 'en_US',
  debug: false,
};
```

## Related

* [react-messenger-customer-chat](https://github.com/Yoctol/react-messenger-customer-chat) - React component for messenger customer chat plugin.
* [react-messenger-checkbox](https://github.com/Yoctol/react-messenger-checkbox) - React component for messenger checkbox plugin.
* [messaging-api-messenger](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-messenger) - Messaging APIs for Messenger.
* [bottender](https://github.com/Yoctol/bottender) - Make Bots in Your Way, Fast and Flexibly.

## License

MIT © [Yoctol](https://github.com/Yoctol/react-messenger-message-us)
