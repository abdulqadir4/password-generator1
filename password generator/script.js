function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('passwordDisplay').textContent = password;
}

function copyPassword() {
    const password = document.getElementById('passwordDisplay').textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

function setCustomPassword() {
    const customPassword = document.getElementById('customPasswordInput').value;
    if (customPassword) {
        document.getElementById('passwordDisplay').textContent = customPassword;
    } else {
        alert("Please enter a password.");
    }
}
