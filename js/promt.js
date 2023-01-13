console.log('promt.js connected');
// alert('ki khobor dosto');
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('ki khobor dosto');
    }
}

const aksSomething = () => {
    const decision = confirm('Are you coming to Picnic?');
    console.log(decision);
    if (decision === true) {
        alert('dosto 200tk. bKash kor');
    }
    else {
        console.log('DGM!!! Door e giya mor');
    }
}

const getUserInfo = () => {
    const name = prompt('Tell us your name.', 'Mr. X');
    console.log(name);
    if (!!name) {
        console.log('Welcome here', name);
    }
}