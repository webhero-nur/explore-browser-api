const getCookiesByName = name => {
    const cookiesString = document.cookie;
    const cookieParts = cookiesString.split('; ');
    const cookie = cookieParts.find(c => c.includes(name));
    if (cookie) {
        // country = BD
        const cookieValue = cookie.split('=')[1];
        return cookieValue;
    }
}

document.getElementById('btn-find').addEventListener('click', function () {
    const value = getCookiesByName(document.getElementById('cookie-inpt').value = '');
    alert(value);
})

// get cookie value from browser
document.cookie

// get cookie value as array
document.cookie.split(': ')

// get cookie value in key-value pair
document.cookie.split('; ').map(c => console.log(c))