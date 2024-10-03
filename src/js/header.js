function loadHeader() {
    const isLoggedIn = true; // Substituir pela real de verificação de login

    const headerHTML = `
    <header> 
        <button class="hamburger" aria-label="Toggle menu">&#9776;</button>
        <figure class="logoBox">
            <img src="../../src/img/logo.svg" alt="Valdora Saboaria" class="logo"/>
        </figure>
        
        <nav class="navBox">
            <ul>
                <li><a href="../../src/html/inicio.html">Início</a></li>
                <li><a href="../../src/html/produtos.html">Loja</a></li>
                <li><a href="../../src/html/historia.html">História</a></li>
                <li><a href="../../src/html/contatos.html">Contatos</a></li>
                ${!isLoggedIn ? '<li><a href="../../src/html/login.html">Login</a></li>' : ''}
                <li><a href="../../src/html/contatos.html"><img src="../../src/img/logoIcons/shoppingCart.svg" alt="Carrinho"></a></li>
            </ul>
        </nav>
    </header>
    `;

    document.getElementById('header').innerHTML = headerHTML;

    // Adiciona o evento para o botão de hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navBox = document.querySelector('.navBox');
    hamburger.addEventListener('click', () => {
        navBox.classList.toggle('active');
        hamburger.classList.toggle('active'); // Para adicionar qualquer estilo ao botão se necessário
    });
}

document.addEventListener("DOMContentLoaded", loadHeader);
