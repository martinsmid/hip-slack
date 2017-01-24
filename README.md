# hip-slack
A hipchat in browser addon to have slack-like keyboard shortcuts.

# Keys
The official hipchat app for linux does not have keyboard shortcut for jumping to room/people with unread messages. This little script adds this shortcuts:
    - Alt + Shift + Arrow(Up|Down) - jump to previous/next unread room/people
    - Alt + Arrow(Up|Down) - jump to previous/next room/people

# Installation
To run this I am using the [Custom JavaScript for Websites 2](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk) Chrome plugin to inject custom javascript into a specific website. Here is the link: https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk.

- Install the Chrome extension
- Open a new tab with your hipchat domain
- Click on the extension's icon in top right corner
- The domain for this script should be prefilled with your hipchat domain
- Paste the content of [hip-slack-addon.js](./hip-slack-addon.js) into the extension text area
- Select to inject also jQuery
- Save
- Optionally, you can create a separate browser-app from this UI by navigating `Chrome menu / More tools / Add to desktop`
