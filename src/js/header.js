function loadHeader() {
    // Inicializa o estado de login como 'false' se não houver valor no localStorage
    if (localStorage.getItem('isLoggedIn') === null) {
        localStorage.setItem('isLoggedIn', 'false');
    }

    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const headerHTML = `
    <header> 
        <button class="hamburger" aria-label="Toggle menu">&#9776;</button>
        <figure class="logoBox">
            <img src="../../src/img/logo.svg" alt="Valdora Saboaria" class="logo"/>
        </figure>
        
        <nav class="navBox">
            <ul>
                <li><a href="../../src/html/inicio.html">Início</a></li>
                <li><a href="../../src/html/loja.html">Loja</a></li>
                <li><a href="../../src/html/historia.html">Sobre mim</a></li>
                <li><a href="../../src/html/contatos.html">Contatos</a></li>
                ${!isLoggedIn ? '<li><a href="#" id="openPopup">Login</a></li>' : '<li><a href="#" id="logout">Logout</a></li>'}
                <li><a href="#"><img src="../../src/img/logoIcons/shoppingCart.svg" alt="Carrinho"></a></li>
            </ul>
        </nav>
    </header>
    <div id="popup" class="popup" style="display: none;">
        <div class="popup-content">
            <h2>Tela de Login</h2>
            <span id="closePopup" class="close">&times;</span>
            <form id="loginForm">
                <label for="username">Usuário:</label>
                <input type="text" id="username" name="username" required><br><br>
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required><br><br>
                <a href="#" id="submitLogin">Entrar</a>
            </form>
        </div>
    </div>
    <div id="logoutPopup" class="popup" style="display: none;">
        <div class="popup-content">
            <h2>Você tem certeza que deseja deslogar?</h2>
            <a href="#" id="confirmLogout">Sim</a>
            <a href="#" id="cancelLogout">Não</a>
        </div>
    </div>
    `;

    document.getElementById('header').innerHTML = headerHTML;

    // Eventos para o botão de hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navBox = document.querySelector('.navBox');
    hamburger.addEventListener('click', () => {
        navBox.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Evento para abrir o pop-up de login
    const openPopup = document.getElementById("openPopup");
    if (openPopup) {
        openPopup.addEventListener('click', (event) => {
            event.preventDefault();
            document.body.classList.add('no-scroll'); // Desabilita o scroll
            document.getElementById("popup").style.display = "block";
        });
    }

    // Eventos para fechar o pop-up de login
    const closePopup = document.getElementById("closePopup");
    closePopup.addEventListener('click', () => {
        document.getElementById("popup").style.display = "none";
        document.body.classList.remove('no-scroll'); // Reabilita o scroll
    });

    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById("popup")) {
            document.getElementById("popup").style.display = "none";
            document.body.classList.remove('no-scroll'); // Reabilita o scroll
        }
        if (event.target === document.getElementById("logoutPopup")) {
            document.getElementById("logoutPopup").style.display = "none";
        }
    });

    // Evento para o envio do formulário de login
    const loginForm = document.getElementById("loginForm");
    const submitLogin = document.getElementById("submitLogin");
    if (submitLogin) {
        submitLogin.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.setItem('isLoggedIn', 'true');
            document.getElementById("popup").style.display = "none";
            document.body.classList.remove('no-scroll'); // Reabilita o scroll
            loadHeader();
        });
    }

    // Evento para logout
    const logout = document.getElementById("logout");
    if (logout) {
        logout.addEventListener('click', (event) => {
            event.preventDefault();
            document.body.classList.add('no-scroll'); // Desabilita o scroll
            document.getElementById("logoutPopup").style.display = "block"; // Abre o pop-up de confirmação
        });
    }

    // Evento para confirmar logout
    const confirmLogout = document.getElementById("confirmLogout");
    if (confirmLogout) {
        confirmLogout.addEventListener('click', () => {
            localStorage.setItem('isLoggedIn', 'false');
            document.getElementById("logoutPopup").style.display = "none"; // Fecha o pop-up de confirmação
            document.body.classList.remove('no-scroll'); // Reabilita o scroll
            loadHeader(); // Recarrega o cabeçalho
        });
    }

    // Evento para cancelar logout
    const cancelLogout = document.getElementById("cancelLogout");
    if (cancelLogout) {
        cancelLogout.addEventListener('click', () => {
            document.getElementById("logoutPopup").style.display = "none"; // Fecha o pop-up de confirmação
            document.body.classList.remove('no-scroll'); // Reabilita o scroll
        });
    }
}

// Inicializa o cabeçalho ao carregar a página
document.addEventListener("DOMContentLoaded", loadHeader);
