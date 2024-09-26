function loadProducts() {
    const productsHTML = `
    <section class="promoProducts">
            <article class="aboutProducts">
                <h2>Promoção de Aniversário</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum numquam doloremque ad amet, itaque
                    pariatur laudantium labore qui veritatis laboriosam!</p>
            </article>

            <div class="fatherProductsInPromo">
                <div class="productsList">
                    <figure>
                        <img src="../../src/img/imagensSabonetes/img1.jpg" alt="Imagem produto 1">
                    </figure>
                    <h3>Produto1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, totam!</p>
                    <button>Buy</button>
                </div>
                <div class="productsList">
                <figure>
                <img src="../../src/img/imagensSabonetes/img2.jpg" alt="Imagem produto 2">
            </figure>
                    <h3>Produto2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, porro?</p>
                    <button>Buy</button>
                </div>
                <div class="productsList">
                <figure>
                <img src="../../src/img/imagensSabonetes/img3.jpg" alt="Imagem produto 3">
            </figure>
                    <h3>Produto3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, explicabo.</p>
                    <button>Buy</button>
                </div>
                <div class="productsList">
                <figure>
                <img src="../../src/img/imagensSabonetes/img4.jpg" alt="Imagem produto 4">
            </figure>
                    <h3>Produto4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, explicabo.</p>
                    <button>Buy</button>
                </div>
            </div>
        </section>
    `;
    document.getElementById('products').innerHTML = productsHTML;
}
document.addEventListener("DOMContentLoaded", loadProducts);