import messages from './messages';

var nextStep;
export function setScript(id){
  const script = messages.scripts[id];
  nextStep = function *(){
    for(let i = 0; i < script.flow.length; i++ ){
      yield messages.messages[script.flow[i]];
    }
  }();
}

function formatInstructions(source) {
  if (Array.isArray(source)){
    let all = source.reduce((out, line)=> {
      if (Array.isArray(line)) {
        let [text, ...style] = line;
        out.text.push(text);
        out.style = out.style.concat(style);
      } else {
        out.text.push(`%c${line}`);
        out.style.push("font-family: serif; font-size: 1rem");
      }
      return out;
    }, {text:[], style:[]});
    return [all.text.join("\n"), ...all.style];
  } else {
    return [source];
  }
}
function instructions( {content}){
  console.log.call(this, ...formatInstructions(content));
}

function code({code}){
  if(Array.isArray(code)) {
    console.log(code.join('\n'));
  }else {

    console.log(code);
  }
}
export function next() {
  let step = nextStep.next().value;
  // console.log(`%c${formatOutput(step.content)}`, "font-family: serif; font-size: 1rem");
  instructions(step);
  code(step);
  // copy(formatOutput(step.code))
}
export function help(){
  instructions(messages.messages.help);
}
