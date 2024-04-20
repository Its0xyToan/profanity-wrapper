## Profanity-Api Wrapper
This little project is a wrapper for [joschan21's profanity.dev API](https://github.com/joschan21/profanity.dev)

### Download
With npm or the package manager of your choice.
> `npm i profanity.dev`

### Documentation
This package is very easy to use:

```js
const profanity = require("profanity.dev")
// or 
import * as profanity from "profanity.dev"

// To check if one string has profanity in it, just do
profanity.checkOne("Hello world").then((result) => {
    console.log(result.isProfanity) // false
})

// To check if multiple strings have profanity in them, just do
profanity.checkMultiple(["mom", "hello world everyone", "fuck you"]).then((result) => {
    console.log(result.isProfanity) // true
})
```
And voilà !

### Author
[Its0xyToan](https://github.com/Its0xyToan)

### Contributing
If you would like to contribute, just do a pull request (I don't know why you would want to contribute in that but ok)