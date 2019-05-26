import {INSTRUCTION_STYLE, CODE_STYLE} from '../lib/constants'

export let messages = {
  "1": {
    "content": "Cool! you're a developer too!\nHow about trying some of our features?"
  },
  "2": {
    "content": [
      "Cool! you're a developer too!\nHow about trying some of our features?",
      ["Type %cnext()%c to move the next step.", CODE_STYLE, INSTRUCTION_STYLE],
      ["You can also type %chelp()%c to get some instructions.", CODE_STYLE, INSTRUCTION_STYLE],
      "To get started, create an instance of Cloudinary, for our demo cloud, and scroll to the demo image:"
    ],
    "code": [
      "cl = new cloudinary.Cloudinary({cloud_name: 'demo'})",
      "img = document.getElementById('imagine')",
      "img.scrollIntoView()"
    ]
  },
  "3": {
    "content": "This image is too large, you better crop its width, try this:",
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'crop', width: 400}))"
  },
  "4": {
    "content": [
      "That's not very good. We need to see the face of the person in the photo.",
      "Luckyly, that's easy enough with Cloudinary. Try this:"
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'crop', width: 400, gravity: 'face'}))"
  },
  "5": {
    "content": [
      "That's better!",
      "The face-gravity feature allows you to crop millions of images automatically and never miss a face.",
      "In fact, Cloudinary can find the most interesting thing in the image even if it's not a face.",
      "Let's try using our auto-gravity parameter:"
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'crop', width: 400, gravity: 'auto'}))"
  },
  "6": {
    "content": [
      "How cool is that? The parameter applies a sophisticated AI algorithm that analyzes the pixels in an image and prioritizes the most salient areas of each image on-the-fly.",
      "The analysis gives priority to skin tones, edge detection, color contrasts, any detected faces, and more, in order to determine the most important areas to keep when it crops.",
      "Now let's play with the radius and create a nice rounded-corners image on-the-fly. Try this:"
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'fill', radius: 'max', width: 400, height: 400, gravity: 'auto'}))"
  },
  "7": {
    "content": [
      "Cloudinary can also create a variety of effects. For example, check out how simple it is to create a fun cartoon image:"
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'fill', effect: 'cartoonify:10:20', width: 400, height: 400, gravity: 'auto'}))"
  },
  "end": {
    "content": [
      "Kudos for passing the transformation challenge!",
      "This was just a small taste of Cloudinary's image solution for developers. You've gotten this far, so you're ready to start transforming images on your own site. Registration is free, and the free tier provides plenty of quota to play around and get Cloudinary into your site. Don't forget to check out everything Cloudinary can do with video too!",
      ["Click on the following link to sign up for a %cfree%c account: https://cloudinary.com/users/register/free",
      "color:red", INSTRUCTION_STYLE]
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'fill', effect: 'cartoonify:10:20', width: 400, height: 400, gravity: 'auto'}))"
  },
  "help": {
    "content": [
      ["%cTo get to the next step, simple type %cnext()%c",INSTRUCTION_STYLE, CODE_STYLE, INSTRUCTION_STYLE],
      ["%cYou can also jump to a specific step by type %cstep(x)%c",INSTRUCTION_STYLE, CODE_STYLE, INSTRUCTION_STYLE],
    ]
  }
};
export let scripts = [
  {
    "name": "basic first time",
    "flow": [2, 3, 4, 5]
  }
];

export default {messages, scripts};
