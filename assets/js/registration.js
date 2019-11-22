$(document).ready(() => {
    $.get('http://127.0.0.1:3000/test', (data) => {
        console.log(data);
    });
});