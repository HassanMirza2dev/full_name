function createFullName() {
    let firstname = document.querySelector("#first_name").value
    let lastname = document.querySelector("#last_name").value
    let fullname = document.querySelector("#full_name").textContent = firstname + " " + lastname
}