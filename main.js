function planatrip() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Plan A Trip');
        }, 2000)
    })
}

function gototrip() {
    setTimeout(() => {
        console.log('going To Trip')
    }, 1000)
}

async function fun(){
const msg = await planatrip();
console.log(msg)
gototrip();
// const msg2 = await gototrip();
// console.log(msg2);
}
fun();