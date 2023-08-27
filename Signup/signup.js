let htmlAlert = document.querySelectorAll(".pages-link")
let Alert = Array.from(htmlAlert)
for (let i = 0; i < Alert.length; i++) {
   Alert[i].setAttribute("onclick","showAlert()");
}
const showAlert = () => {
    alert("You need to Log-in/Sign-up to proceed");
};
console.log(Alert)