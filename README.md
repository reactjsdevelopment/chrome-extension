    // "build": "react-scripts build",
        "build": "INLINE_RUNTIME_CHUNK=false react-scripts build",
            "build": "set INLINE_RUNTIME_CHUNK=false&&react-scripts build",
    "build": "set INLINE_RUNTIME_CHUNK=false&&craco build",

either use this INLINE_RUNTIME_CHUNK or 
 "content_security_policy": "script-src 'self' 'sha256-GgRxrVOKNdB4LrRsVPDSbzvfdV4UqglmviH9GoBJ5jk='; object-src 'self'" 
    chrome://extensions/

icons
        {
      "16": "logo192.png",
      "48": "logo192.png",
      "128": "logo192.png"
    }
      "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],

  npm install @types/chrome --save-dev
npm install @craco/craco --save --legacy-peer-deps

https://github.com/nemrosim/chrome-react-extension-example
