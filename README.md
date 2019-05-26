# console-cool
Offer a tutorial to users through the browser's console

To setup the scripts, create a message list:

```javascript
const messages = {
  1: {
    content: "One liner",
    code: "console.log('oneliner')"
  },
  someStep: {
    content: [
      "A multiline line",
      "content"
    ],
    code: [
      "console.log('I am multiline')",
      "console.log('too!')"
    ]
  },
  formatted: {
    content: [
      ["%cSome old %csomething blue...", "color: grey", "color: blue"]
    ]
  }
}
```
