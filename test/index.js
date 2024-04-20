const profanity = require("../build/index.js")

profanity.checkMultiple(["mom", "hello world everyone", "fuck you"]).then((result) => {
    console.log(result.isProfanity)
})