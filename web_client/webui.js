import { auth, fsdbOps, roadblocksRef } from "./firebase.js";

let form = document.getElementById("RBENTRY");
form.addEventListener("submit", async event => {
    event.preventDefault();
    const sev = document.getElementById("RB_severity").value;
    const street = document.getElementById("RB_street").value;
    const section = document.getElementById("RB_section").value;
    if ([sev, street, section].includes("")) return;
    console.log("Valid", sev, street, section);
    const data = {
        severity: parseInt(sev),
        street: parseInt(street[0]),
        eastToWest: street.includes("EW"),
        edgeNumber: parseInt(section)
    }
    const docRef = fsdbOps.addDoc(roadblocksRef, data);
    msg("-- Succesfully added roadblock! --");
});

const msg = (message, erase = true) => {
    const msgLoc = document.getElementById("RBMSG");
    msgLoc.innerHTML = message;
    if (erase) setTimeout(_ => msg("", false), 2000);
}