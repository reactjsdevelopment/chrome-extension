Chrome extension is a tool that makes your task easy. You can create an extension in very little time. It just needs basic knowledge of HTML, CSS and JS. For basic set up what you need is a manifest and HTML file.

Here is a code for the manifest file for the Extension-
the manifest file contains basic information like name, description, version, icons, scripts, and action type. As we create a manifest file for a web app the same thing follows here.
Here we are going to make a simple hello world extension-

To run this extension go to this link chrome://extensions and open the popup by clicking the load unpacked button then upload your files then you can activate your extension.

To officially upload or publish your extension you can signup here. It will cost you around $5.

https://chrome.google.com/webstore/developer/dashboard

action: actions allow you to customize the buttons that appear on the Chrome toolbar, which usually trigger a pop-up with the extension UI. In our case, we define that we want our button to start a pop-up with the contents of our index.html, which hosts our application.

The React application can’t directly alter the browser contents, tabs, or websites. However, it can access the browser API through an injected global object called chrome.

Message passing is a technique that allows different scripts running in different contexts to communicate with each other. Messages in Chrome are not limited to content scripts and pop-up scripts, and message passing also enables cross-extension messaging, regular website-to-extension messaging, and native apps messaging.

CRA performs all the magic that is needed to run and build React applications, but it encapsulates all configurations, build settings, and other files into their library. Craco allows us to override some of these configuration files without having to eject the project.

CRA: The create-react-app CLI tool allows you to quickly create & run React applications with no configuration step.

Content scripts are files that run in the context of web pages. By using the standard Document Object Model (DOM), they are able to read details of the web pages the browser visits, make changes to them, and pass information to their parent extension.

Background script (service worker)
The extension service worker is the extension's event handler; it contains listeners for browser events that are important to the extension. It lies dormant until an event is fired then performs the instructed logic; it is only loaded when it is needed and unloaded when it goes idle. The service worker has access to all the Chrome APIs, as long it declares the required permissions in the manifest.json.

The popup that you see when you click the icon in the toolbar.
The content scripts that run on top of an existing website.
The background scripts that run in the background of Google Chrome.

The browser_action key essentially translates to “give me the info that I need in order to create an extension extension popup”. We are telling Google that “when the users click on the extension icon (default_icon) , show them a popup whose content can be found in the default_popup. In addition, when they hover over the extension’s icon, show them the text found under default_title”

chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.

https://developer.chrome.com/docs/extensions

https://developer.chrome.com/docs/extensions/mv3/getstarted/
craco.config.js -> webpack
utils.ts -> taburl, id
content.ts -> chrome listeners
background.ts -> Listener handling installation

manifest.json -> background (background.ts),
content_scripts(content.ts)

// * chrome - the global namespace for Chrome's extension APIs
// * runtime – the namespace of the specific API we want to use
// * onInstalled - the event we want to subscribe to
// * addListener - what we want to do with this event

chrome.tabs.query(object queryInfo, function callback)

chrome.tabs.create