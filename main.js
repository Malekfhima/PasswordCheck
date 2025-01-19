function verif() {
    let pass = document.getElementById("pass").value;
    let m = document.getElementById("m");
    m.innerHTML = "";
    const isNumeric = /^\d+$/.test(pass);
    const isLowerCase = pass.split('').every(char => char === char.toLowerCase() && char !== char.toUpperCase());
    const isUpperCase = pass.split('').every(char => char === char.toUpperCase() && char !== char.toLowerCase());
    const hasLowerCase = /[a-z]/.test(pass);
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasNumbers = /\d/.test(pass);
    const hasSymbols = /[!@#\$%\^\&*\)\(+=._-]/.test(pass);
    if (hasLowerCase && hasUpperCase && hasNumbers && hasSymbols) {
        if (pass.length >= 4 && pass.length <= 6) {
            m.innerHTML = "Instantly";
        } else if (pass.length == 7) {
            m.innerHTML = "31 seconds";
        } else if (pass.length == 8) {
            m.innerHTML = "39 minutes";
        } else if (pass.length == 9) {
            m.innerHTML = "2 days";
        } else if (pass.length == 10) {
            m.innerHTML = "5 months";
        } else if (pass.length == 11) {
            m.innerHTML = "34 years";
        } else if (pass.length == 12) {
            m.innerHTML = "3K years";
        } else if (pass.length == 13) {
            m.innerHTML = "202K years";
        } else if (pass.length == 14) {
            m.innerHTML = "16m years";
        } else if (pass.length == 15) {
            m.innerHTML = "1bn years";
        } else if (pass.length == 16) {
            m.innerHTML = "92bn years";
        } else if (pass.length == 17) {
            m.innerHTML = "7tn years";
        } else if (pass.length >= 18) {
            m.innerHTML = "438tn years";
        }
        return false;
    }
    if (hasLowerCase && hasUpperCase && hasNumbers) {
        if (pass.length >= 4 && pass.length <= 6) {
            m.innerHTML = "Instantly";
        } else if (pass.length == 7) {
            m.innerHTML = "7 seconds";
        } else if (pass.length == 8) {
            m.innerHTML = "7 minutes";
        } else if (pass.length == 9) {
            m.innerHTML = "7 hour";
        } else if (pass.length == 10) {
            m.innerHTML = "3 weeks";
        } else if (pass.length == 11) {
            m.innerHTML = "3 years";
        } else if (pass.length == 12) {
            m.innerHTML = "200 years";
        } else if (pass.length == 13) {
            m.innerHTML = "12K years";
        } else if (pass.length == 14) {
            m.innerHTML = "750K years";
        } else if (pass.length == 15) {
            m.innerHTML = "45m years";
        } else if (pass.length == 16) {
            m.innerHTML = "3bn years";
        } else if (pass.length == 17) {
            m.innerHTML = "179bn years";
        } else if (pass.length >= 18) {
            m.innerHTML = "11tn years";
        }
        return false;
    }
    if (isUpperCase && hasUpperCase) {
        if (pass.length >= 4 && pass.length <= 6) {
            m.innerHTML = "Instantly";
        } else if (pass.length == 7) {
            m.innerHTML = "2 seconds";
        } else if (pass.length == 8) {
            m.innerHTML = "2 minutes";
        } else if (pass.length == 9) {
            m.innerHTML = "1 hour";
        } else if (pass.length == 10) {
            m.innerHTML = "3 days";
        } else if (pass.length == 11) {
            m.innerHTML = "5 months";
        } else if (pass.length == 12) {
            m.innerHTML = "24 years";
        } else if (pass.length == 13) {
            m.innerHTML = "1K years";
        } else if (pass.length == 14) {
            m.innerHTML = "64K years";
        } else if (pass.length == 15) {
            m.innerHTML = "3m years";
        } else if (pass.length == 16) {
            m.innerHTML = "173m years";
        } else if (pass.length == 17) {
            m.innerHTML = "9bn years";
        } else if (pass.length >= 18) {
            m.innerHTML = "467bn years";
        }
        return false;
    }
    if (isLowerCase) {
        if (pass.length >= 4 && pass.length <= 8) {
            m.innerHTML = "Instantly";
        } else if (pass.length == 9) {
            m.innerHTML = "10 seconds";
        } else if (pass.length == 10) {
            m.innerHTML = "4 minutes";
        } else if (pass.length == 11) {
            m.innerHTML = "2 hours";
        } else if (pass.length == 12) {
            m.innerHTML = "2 days";
        } else if (pass.length == 13) {
            m.innerHTML = "2 months";
        } else if (pass.length == 14) {
            m.innerHTML = "4 years";
        } else if (pass.length == 15) {
            m.innerHTML = "100 years";
        } else if (pass.length == 16) {
            m.innerHTML = "3K years";
        } else if (pass.length == 17) {
            m.innerHTML = "69K years";
        } else if (pass.length >= 18) {
            m.innerHTML = "2m years";
        }
        return false;
    }
    if (isNumeric) {
        if (pass.length >= 4 && pass.length <= 11) {
            m.innerHTML = "Instantly";
        } else if (pass.length == 12) {
            m.innerHTML = "2 seconds";
        } else if (pass.length == 13) {
            m.innerHTML = "19 seconds";
        } else if (pass.length == 14) {
            m.innerHTML = "3 minutes";
        } else if (pass.length == 15) {
            m.innerHTML = "32 minutes";
        } else if (pass.length == 16) {
            m.innerHTML = "5 hours";
        } else if (pass.length == 17) {
            m.innerHTML = "2 days";
        } else if (pass.length >= 18) {
            m.innerHTML = "3 weeks";
        }
        return false;
    }
    return true;
}