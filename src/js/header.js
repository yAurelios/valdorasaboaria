function loadHeader() {
    const headerHTML = `
    <header> 
        <figure class="logoBox">
            <img src="../../src/img/logo.svg" alt="Valdora Saboaria" class="logo"/>
        </figure>
        <nav class="navBox">
            <ul>
                <li><a href="../../src/html/inicio.html">Início</a></li>
                <li><a href="../../src/html/produtos.html">Loja</a></li>
                <li><a href="../../src/html/historia.html">Sobre mim</a></li>
                <li><a href="">Contatos</a></li>
            </ul>
        </nav>
    </header>
    `;
    document.getElementById('header').innerHTML = headerHTML;
}
document.addEventListener("DOMContentLoaded", loadHeader);