/* botão zap
document.addEventListener("scroll", () => {
    const zapButton = document.getElementById("zap");
    const targetSection = document.querySelector("#Categorias"); // Seção onde o botão deve aparecer
    
    // Verifica a posição da seção em relação ao scroll
    const sectionTop = targetSection.offsetTop;
    const currentScroll = window.scrollY;

    // Exibe o botão se o scroll estiver além do topo da seção
    if (currentScroll >= sectionTop) {
        zapButton.style.display = "flex"; // Mostra o botão
    } else {
        zapButton.style.display = "none"; // Oculta o botão
    }
});*/
/* Fim botão zap*/
/*botão topo*/
document.addEventListener("scroll", () => {
    const btntopoButton = document.getElementById("btntopo");
    const targetSection = document.querySelector("#Categorias"); // Seção onde o botão deve aparecer
    
    // Verifica a posição da seção em relação ao scroll
    const sectionTop = targetSection.offsetTop;
    const currentScroll = window.scrollY;

    // Exibe o botão se o scroll estiver além do topo da seção
    if (currentScroll >= sectionTop) {
        btntopoButton.style.display = "flex"; // Mostra o botão
    } else {
        btntopoButton.style.display = "none"; // Oculta o botão
    }
});
/*Fim botão topo */