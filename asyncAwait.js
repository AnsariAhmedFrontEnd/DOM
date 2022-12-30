console.log('Person 1: Shows Ticket');
console.log('Person 2: Shows Ticket');

const preMovie = async() => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'),3000)
    });

    const getPopcorn = new Promise((resolve,reject) => resolve('Popcorn'));

    const addButter = new Promise((resolve,reject) => resolve('Butter'));

    const getColdDring = new Promise((resolve,reject) => resolve('Cold Drink'))

    let ticket = await promiseWifeBringingTicket;

    console.log(`Wife: I got the ${ticket}`)
    console.log('Husband: we should go in');
    console.log('Wife: no I am hungry ');

    let popcorn = await getPopcorn;

    console.log(`Husband: I got some ${popcorn}`);
    console.log('Husband: we should go in');
    console.log('Wife: I need butter on my Popcorn');

    let butter = await addButter

    console.log(`Husband: I got some ${butter} on the Popcorn`);
    console.log(`Husband: Anything else darling`);
    console.log(`Wife: Let's go we are getting late`);
    console.log(`Husband: Thank you for the reminder`);

    let coldDring = await getColdDring;

    console.log('Husban: Honey surpsrise, I also got some ColdDrink');
    console.log('Wife: Awwwwww Honey');
    console.log(`Husband: Let's go in`)
    return ticket;

}

preMovie().then((m) => console.log(`Person 3 : shows ${m}`));


console.log('Person 4: Shows Ticket');
console.log('Person 5: Shows Ticket');