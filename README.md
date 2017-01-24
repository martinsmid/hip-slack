# hip-slack
A hipchat web app addon to have slack-like keyboard shortcuts for navigating channels.

# keys
The official hipchat app for linux does not have keyboard shortcut for jumping to room/people with unread messages. This little script adds this shortcuts
* Alt + Shift + Arrow(Up|Down) - jump to previous/next unread room/people
* Alt + Arrow(Up|Down) - jump to previous/next room/people

# installation
To run this I am using the [Custom JavaScript for Websites 2](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk) Chrome extension to inject custom javascript into a specific website.

- Install the Chrome extension from [this link](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk)
- Open a new tab with your hipchat domain
- Click on the extension's icon in top right corner
- The domain for this script should be prefilled with your hipchat domain
- Paste the content of [hip-slack-addon.js](https://raw.githubusercontent.com/martinsmid/hip-slack/master/hip-slack-addon.js) into the extension text area
- Select to inject also jQuery
- Save
- Optionally, you can create a separate browser-app from this UI by navigating `Chrome menu / More tools / Add to desktop`
