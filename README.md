# hip-slack
A hipchat web app addon to have slack-like keyboard shortcuts for navigating channels.

# keys
The official hipchat app for linux does not have keyboard shortcut for jumping to room/people with unread messages. This little script adds this shortcuts
* Alt + Shift + ⇅ - jump to previous/next unread room/people
* Alt + ⇅ - jump to previous/next room/people

# installation
To run this I am using the [Custom JavaScript for Websites 2](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk) Chrome extension to inject custom javascript into a specific website.

- Install the Chrome extension from [this link](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk)
- Open a new tab with your hipchat domain
- Click on the extension's icon in top right corner
- The domain for this script should be prefilled with your hipchat domain
- Paste the content of [hip-slack-addon.js](https://raw.githubusercontent.com/martinsmid/hip-slack/master/hip-slack-addon.js) into the extension text area
- Select to inject also jQuery
- Save
- Optionally, you can create a separate browser-app from this UI by navigating<br />
`Chrome menu / More tools / Add to desktop`

# custom style
I have also modified the style of hipchat a little. I am not strong at UI design, but I didn't like the default thin fonts and made the rooms/people labels more dense So more of the text fits on the screen. The source is in [dark.css](./dark.css) and requires another chrome plugin, called [Stylish](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe?utm_source=chrome-app-launcher-info-dialog), for the style to be injected into pages
