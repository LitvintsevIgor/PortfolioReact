export const swatch = document.querySelector<HTMLElement>(".swatch");

document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (swatch) {
        if (scrollPosition > 200) {
            swatch.style.backgroundColor = "#1c1c1c"
        } else {
            swatch.style.backgroundColor = "transparent"
        }
    }
})
