if (typeof(Storage) !== "undefined") {
    console.log("OK")
        // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}
var btn = document.querySelector("#adad")

var key = 0; //move var key to here

function signup() {
    var name = document.querySelector(".username")
    var pass1 = document.querySelector("#pass1")
    var pass2 = document.querySelector("#pass2")
    var noti = document.querySelector(".noti")

    var existed_name = (JSON.parse(localStorage.getItem(key)))

    console.log(existed_name)
    if ((pass1.value === pass2.value) && (name.value != existed_name)) {
        noti.innerHTML = "You've created your account"
        var user = {
            username: name.value,
            password: pass1.value,

        };
        localStorage.setItem(key, JSON.stringify(user))
        return (function() {
            key++;
            return key;

        }());
    } else if (pass1.value != pass2.value) {
        noti.innerHTML = "Re-type password is not same as the original password"
    } else {
        noti.innerHTML = "This username has been used"

    }
}

function deleteAccount() {
    localStorage.removeItem(user)
}
btn.addEventListener("click", signup)