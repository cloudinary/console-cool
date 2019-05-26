const INSTRUCTION_STYLE = "font-family: serif; font-size: 1rem";
const CODE_STYLE = "font-family: monospace";

export default {
  "messages": {
    "1": {
      "content": "Cool! you're a developer too!\nHow about trying some of our features?"
    },
    "2": {
      "content": [
        "Cool! you're a developer too!\nHow about trying some of our features?",
        ["You can type %chelp()%c", CODE_STYLE, INSTRUCTION_STYLE],
        "To get started, create an instance of Cloudinary, for our demo cloud, and scroll to the demo image:"
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
        ["To get to the next step, simple type %cnext()%c", CODE_STYLE, INSTRUCTION_STYLE],
        ["You can also jump to a specific step by type %cstep(x)%c", CODE_STYLE, INSTRUCTION_STYLE],
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
