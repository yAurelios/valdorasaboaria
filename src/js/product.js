function loadProducts(title, description, products) {
    const productsHTML = `
    <section class="promoProducts">
        <article class="aboutProducts">
            <h2>${title}</h2>
            <p>${description}</p>
        </article>

        <div class="fatherProductsInPromo">
            ${products.map(product => `
                <div class="productsList">
                    <figure>
                        <img src="${product.img}" alt="${product.name}">
                    </figure>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Preço: ${product.price}</p>
                    <button>Buy</button>
                </div>
            `).join('')}
        </div>
    </section>
    `;

    // Seleciona todas as divs com a classe 'products'
    const productDivs = document.querySelectorAll('.products');
    
    // Adiciona o conteúdo a cada div
    productDivs.forEach(div => {
        div.innerHTML += productsHTML; // Adiciona o conteúdo a cada div
    });
}

// Chama a função com diferentes títulos, descrições e listas de produtos
document.addEventListener("DOMContentLoaded", () => {
    loadProducts("Promoção de Aniversário", "Descrição da promoção de aniversário!", [
        { name: "Produto1", description: "Descrição do Produto 1", price: "R$ 10,00", img: "../../src/img/imagensSabonetes/img1.jpg" },
        { name: "Produto2", description: "Descrição do Produto 2", price: "R$ 15,00", img: "../../src/img/imagensSabonetes/img2.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "R$ 20,00", img: "../../src/img/imagensSabonetes/img3.jpg" },
        {  name: "Produto4", description: "Descrição do Produto 4", price: "R$ 120,00", img: "../../src/img/imagensSabonetes/img5.jpg" }
    ]);

    loadProducts("Promoção de Natal", "Descrição da promoção de Natal!", [
        { name: "Produto A", description: "Descrição do Produto A", price: "R$ 30,00", img: "../../src/img/imagensSabonetes/img1.jpg" },
        { name: "Produto B", description: "Descrição do Produto B", price: "R$ 35,00", img: "../../src/img/imagensSabonetes/img2.jpg" },
        { name: "Produto C", description: "Descrição do Produto C", price: "R$ 40,00", img: "../../src/img/imagensSabonetes/img3.jpg" }
    ]);

    loadProducts("Promoção Dia do Estudante", "Compre sabonetes para sua mochila ficar perfumada", [
        { name: "Produto Sabonete Cheiroso", description: "Sabonete para carregar na bolsa", price: "R$ 15,00", img: "../../src/img/imagensSabonetes/img4.jpg"},
        { name: "Perfume Lavanda", description: "Perfume para carregar na bolsa", price: "R$ 35,00", img: "../../src/img/imagensSabonetes/img2.jpg"}
    ]);

    loadProducts("Promoção Dia dos Namorados", "Compre sabonetes para sua namorada ficar perfumada", [
        { name: "Produto Sabonete Cheiroso", description: "Sabonete para carregar na bolsa", price: "R$ 15,00", img: "../../src/img/imagensSabonetes/img4.jpg"},
        { name: "Perfume Lavanda", description: "Perfume para carregar na bolsa", price: "R$ 35,00", img: "../../src/img/imagensSabonetes/img2.jpg"}
    ]);

    // loadProducts("Descrição Novo Categoria", "Descrição da Categoria Produto", [
    //     {
    //         name: "Produto Novo 1", description: "Descrição do Novo produto", price: "R$ 90,00", img: "../../src/img/imagensSabonetes/img6.jpg"
    //     },
    //     {
    //         name: "Produto Novo 1", description: "Descrição do Novo produto", price: "R$ 90,00", img: "../../src/img/imagensSabonetes/img6.jpg"
    //     },
    //     {
    //         name: "Produto Novo 1", description: "Descrição do Novo produto", price: "R$ 90,00", img: "../../src/img/imagensSabonetes/img6.jpg"
    //     },
    //     {
    //         name: "Produto Novo 1", description: "Descrição do Novo produto", price: "R$ 90,00", img: "../../src/img/imagensSabonetes/img6.jpg"
    //     },
    //     {
    //         name: "Produto Novo 1", description: "Descrição do Novo produto", price: "R$ 90,00", img: "../../src/img/imagensSabonetes/img6.jpg"
    //     },
    // ])
});
