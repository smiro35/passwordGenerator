var x = "0123456789abcdefghijklmnopqrstuvwxyz";

function gen() {
    var password = "";

    for (let index = 8; index < 128; index++) {

        var c = Math.floor((Math.random() * x.length) + 0);
        password += x.charAt(c);

    }

    console.log(password);
    document.getElementById("pass");
}