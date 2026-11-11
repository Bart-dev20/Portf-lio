document.addEventListener("click", (event) => {

    const navegacao = event.target.dataset.action;

    if (!navegacao) return false;

    if (navegacao === "home-page") {

        setTimeout(() => {
            document.querySelector(".msg").style.display = "none";
        }, 3000);

        document.querySelector(".msg").style.display = "block";

    } else if (navegacao === "meus-projetos") {

        setTimeout(() => {

            document.querySelector(".radar-meu-projeto").style.display = "none";
        }, 2000);

        document.querySelector(".radar-meu-projeto").style.display = "flex";

        window.scrollBy({
            top: 560,
            left: 0,
            behavior: "smooth"
        });

    } else if (navegacao === "sobre-mim") {

        setTimeout(() => {

            document.querySelector(".radar-decricao").style.display = "none";
        }, 2000);

        document.querySelector(".radar-decricao").style.display = "flex";

        window.scrollBy({
            top: 10,
            left: 0,
            behavior: "smooth"
        });

    } else if (navegacao === "minha-stack") {

        setTimeout(() => {

            document.querySelector(".radar-tech").style.display = "none";
        }, 2000);

        document.querySelector(".radar-tech").style.display = "flex";

        window.scrollBy({
            top: 250,
            left: 0,
            behavior: "smooth"
        });
    }
});
