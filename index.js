// Code your solutions in this file
function writeCards(names, event) {
    const cardList = [];
    for (let i = 0; i < names.length; i++) {
        const cardMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        cardList.push(cardMessage);
    }
    return cardList;
}

function countDown(integer) {
    let i = 0
    while (i <= integer) {
        let subtractInteger = integer - i;
        console.log(subtractInteger);
        i++;
    }
}
