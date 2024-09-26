    function loadFooter() {
    const footerHTML = `
    <footer>
        <figure>
            <img src="../../src/img/logo.svg" alt="Valdora Saboaria" id="footerMain">
        </figure>
        <nav>
            <ul>
                <li class="socialMedias"></li>
                <li class="socialMedias"></li>
                <li class="socialMedias"></li>
                <li class="socialMedias"></li>
            </ul>
        </nav>
        <article>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat consectetur corporis perferendis natus
                nobis autem.</p>
        </article>

        <section>
            <div>
                <h3>Avalie a nossa loja!</h3>
                <button>Avalie aqui!</button>
            </div>
        </section>


    </footer>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
}
document.addEventListener("DOMContentLoaded", loadFooter);