function login() {
    var name = document.querySelector(".username")
    var pass1 = document.querySelector("#pass1")
    var pass2 = document.querySelector("#pass2")
    var noti = document.querySelector(".noti")
    var existed_user = localStorage.getItem(user)
    if (name.value === existed_user.)