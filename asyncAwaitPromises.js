console.log('Person 1: Shows Ticket');
console.log('Person 2: Shows Ticket');

const promiseWifeBringingTicket = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Ticket');
    },3000);
});

const getPopcorn = promiseWifeBringingTicket.then((t) => {
    console.log('Wife: I got the tickets')
    console.log('Husband: we should go in');
    console.log('Wife: no I am hungry ');
    return new Promise((resolve,reject) => {
        resolve(`${t} popcorn`);
    });
});

const getButter = getPopcorn.then((t) => {
    console.log('Husband: I got some Popcorn');
    console.log('Husband: we should go in');
    console.log('Wife: I need butter on my Popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`));
});

const getColdDring = getButter.then((t) => {
    console.log('Husban: Honey surpsrise, I also got some ColdDrink');
    console.log('Wife: Awwwwww Honey');
    console.log(`Husband: Let's go in`);

    return new Promise((resolve,reject) => {
        resolve(`${t} ColdDrink`);
    })
})

getColdDring.then((t) => console.log(t));
console.log('Person 4: Shows Ticket');
console.log('Person 5: Shows Ticket');