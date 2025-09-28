let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("decrease")) {
            count--;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
            value.style.backgroundColor = "rgb(182, 180, 180)";
        }
        if (count < 0) {
            value.style.color = "red";
            value.style.backgroundColor = "rgb(182, 180, 180)";
        }
        if (count === 0) {
            value.style.color = "black";
            value.style.backgroundColor = "blanchedalmond";
        }
        value.textContent = count;
    });
 });