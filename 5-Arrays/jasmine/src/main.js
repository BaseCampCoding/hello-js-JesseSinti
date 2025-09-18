let stack = [1,2,3,4,5,6,7,8,9,10];
let position = 5;
let getItemResult = stack[position];

let replacementCard = 16;
stack[position] = replacementCard;

let newCardTop = 11;
stack.unshift(newCardTop);

stack.splice(position,1);

stack.shift();

let newCardBottom = 100;
stack.push(newCardBottom)

stack.pop()

let stackSize = 9;
let checkSizeOfStackResult = (stack.length === stackSize)
console.log(checkSizeOfStackResult)
