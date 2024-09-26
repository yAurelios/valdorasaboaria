    function loadFooter() {
    const footerHTML = `
    <footer>
        <figure>
            <img src="../../src/img/logo.svg" alt="Valdora Saboaria" id="footerPf">
        </figure>
        <nav>
            <p>Siga nossas redes sociais!</p>
            <ul>
                <li class="socialMedias"><a><img src="../../src/img/logoIcons/whatsappLogo.svg" alt="Whatsapp" class="socialMedias"><p>Whatssap</p></a></li>
                <li class="socialMedias"><a><img src="../../src/img/logoIcons/facebookLogo.svg" alt="Facebook" class="socialMedias"><p>Facebook</p></a></li>
                <li class="socialMedias"><a><img src="../../src/img/logoIcons/instagramLogo.svg" alt="Instagram" class="socialMedias"><p>Instagram</p></a></li>
            </ul>
        </nav>
        <article>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat consectetur corporis perferendis natus
                nobis autem.</p>
        </article>

        <section>
                <h3><a>Avalie a nossa loja e nos ajude a crescer!</a></h3>
        </section>

        <div>
            <h3>
            Feito como atividade avaliativa por estudantes do IFPR - Biopark
            </h3>
            <p>
                Todos os direitos reservados
            </p>
        </div>
    </footer>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
}
document.addEventListener("DOMContentLoaded", loadFooter);