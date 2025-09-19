let visitorName = "Jesse";
let visitorAge = 18;
let visitorTicketId = 113355;
const visitor = {"name": visitorName, "age": visitorAge, "ticketId": visitorTicketId}
console.log(visitor)

visitor["ticketId"] = null;
console.log(visitor)

let tickets={}
tickets[visitorTicketId]= visitorName;

let ticketIdToCheck = 113355;
let ticketStatusResult;

for (key in tickets){
    if (ticketIdToCheck != key){
        ticketStatusResult = "unknown ticket id";
    } else if (tickets[key] === null){
        ticketStatusResult = "not sold";
    } else if (tickets[key] == visitorName){
        ticketStatusResult = "sold to " + tickets[key];
    }

}
console.log(ticketStatusResult)

let simpleTicketStatusResult;
if (tickets.ticketIdToCheck === null || tickets.ticketIdToCheck === undefined){
    simpleTicketStatusResult = "invalid ticket !!!!"
} else {
    simpleTicketStatusResult = tickets.visitorTicketId;
}

console.log(simpleTicketStatusResult)

let visitorWithGtc = {
    gtc: {
        "version": "h10"
    }
}
let gtcVersion;
if (visitorWithGtc && visitorWithGtc.nested && visitorWithGtc.nested.property){
    gtcVersion = visitorWithGtc.gtc[version];
    console.log("yes")
}
console.log(gtcVersion)