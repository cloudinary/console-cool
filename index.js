import {INSTRUCTION_STYLE} from './lib/constants'

/**
 * @module ConsoleCool
 */

let userMessages;
let currentStep;
let script;

function nextStep() {
  if (currentStep < script.flow.length - 1) {
    currentStep++;
  }
  return userMessages.messages[script.flow[currentStep]]
}

/**
 * @typedef {object} script
 * @property {string} name - The name of the flow.
 * @property {string[]} flow - An ordered list of messages
 */

/**
 * Sets the messages to be used by ConsoleCool
 * @param {object} messages
 * @param {script[]} scripts
 */
export function setMessages({messages, scripts}) {
  userMessages = {messages, scripts};
}

/**
 * Selects the script to run. This will also reset the step counter.
 * @param {string|int} id the id of the script
 */
export function setScript(id){
  script = userMessages.scripts[id];
  currentStep = -1;
}

function formatInstructions(source) {
  if (!source) {
    return;
  }
  if (Array.isArray(source)){
    let all = source.reduce((out, line)=> {
      if (Array.isArray(line)) {
        let [text, ...style] = line;
        out.text.push(text);
        out.style = out.style.concat(style);
      } else {
        out.text.push(`%c${line}`);
        out.style.push(INSTRUCTION_STYLE);
      }
      return out;
    }, {text:[], style:[]});
    return [all.text.join("\n") + "\n", ...all.style];
  } else {
    return [source];
  }
}

function instructions( {content}){
  console.log.call(this, ...formatInstructions(content));
}

function code({code}){
  if (!code) {
    return;
  }
  if(Array.isArray(code)) {
    console.log(code.join('\n'));
  }else {

    console.log(code);
  }
}

/**
 * Displays the next step in the script
 */
export function next() {
  let step = nextStep();
  instructions(step);
  code(step);
}

/**
 * Displays the general help message
 */
export function help(){
  instructions(userMessages.messages.help);
}
