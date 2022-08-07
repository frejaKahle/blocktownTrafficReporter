import { auth, fsdbOps, usersRef } from "./firebase.js";

let form = document.getElementById("BTRlogin");
form.addEventListener("submit", async event => {
    event.preventDefault();
    const id = document.getElementById("BTRUID").value
    const pass = document.getElementById("BTRPASS").value
    if (id == "" || pass == "") return;
    const q = fsdbOps.query(usersRef, fsdbOps.where("id", "==", id), fsdbOps.where("passphrase", "==", pass));
    const qSnap = await fsdbOps.getDocs(q);
    if (qSnap.empty) {
        error("*Incorrect username or password")
        return;
    }
    if (qSnap.docs[0].data().isOfficial) location.href = 'webui.html'; // redirect to BTR roadblock entry
    else error("*Non-Officials cannot edit roadblocks")
});

const error = (message) => {
    const errorLoc = document.getElementById("BTRERR");
    errorLoc.innerHTML = message;
    return;
}