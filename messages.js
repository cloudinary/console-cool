const INSTRUCTION_STYLE = "font-family: serif; font-size: 1rem";

export default {
  "messages": {
    "1": {
      "content": "Cool! you're a developer too!\nHow about trying some of our features?"
    },
    "2": {
      "content": [
        "Cool! you're a developer too!\nHow about trying some of our features?",
        "To get started, create an instance of Cloudianry, for our demo cloud, and scroll to the demo image:"
      ],
      "code": [
        "cl = new cloudinary.Cloudinary({cloud_name: 'demo'})",
        "img = document.getElementById('imagine')",
        "img.scrollIntoView()"
      ]
    },
    "3": {
      "content": "Let's start by cropping the image",
      "code": "img.setAttribute('src', cl.url('woman', {crop: 'crop', width: 400}))"
    },
    "4": {
      "content": [
        "Well... that's no good. We need to make sure we focus on the face.",
        "Luckyly, that's easy enough with Cloudinary"
      ],
      "code": "img.setAttribute('src', cl.url('woman', {crop: 'crop', width: 400, gravity: 'face'}))"
    },
    "5": {
      "content": [
        "Much better.",
        "You can use the gravity parameter to tell Cloudinary where to focus. examples...",
        "However for most cases, simply use the 'auto' value and let Cloudinary do the thinking"
      ],
      "code": "img.setAttribute('src', cl.url('woman', {crop: 'crop', width: 400, gravity: 'auto'}))"
    },
    "help": {
      "content" : [
        ["To get to the next step, simple type %cnext()%c", "font-family: monospace", INSTRUCTION_STYLE]
      ]
    }
  },
  "scripts": [
    {
      "name": "basic first time",
      "flow": [2,3,4,5]
    }
  ]
}
