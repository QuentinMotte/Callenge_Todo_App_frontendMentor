//

const lightTheme = document.getElementById("sun");
const darkTheme = document.getElementById("moon");

lightTheme.addEventListener("click", () => {
    document.body.classList.add("light");
    lightTheme.style.display = "none";
    darkTheme.style.display = "block";
});

darkTheme.addEventListener("click", () => {
    document.body.classList.remove("light");
    lightTheme.style.display = "block";
    darkTheme.style.display = "none";
});
