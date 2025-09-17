let line = "Stands so high Huge hooves too Impatiently waits for Reins and harness Eager to leave" ;
let frontDoorLetter = line[0];
let frontDoorPassword = frontDoorLetter + (line[15]).toLowerCase() + (line[31]).toLowerCase() + (line[53]).toLowerCase() + (line[71]).toLowerCase();
let lineWithWhitespace = "Reins and harness";
let backDoorLetter = (lineWithWhitespace[16]); 
let backDoorPassword = `Hor${backDoorLetter}e, `+`please`;
