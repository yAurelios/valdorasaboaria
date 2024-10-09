let currentIndex = 0;

function loadProducts(container, title, description, products) {
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    const productContainer = document.createElement('div');
    productContainer.className = 'slider';

    const innerProductContainer = document.createElement('div');
    innerProductContainer.className = 'productContainer';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'productsList';
        productDiv.innerHTML = `
            <figure>
                <img src="${product.img}" alt="${product.name}">
            </figure>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Preço: R$ ${product.price}</p>
            <button class="viewProducts">View</button>

        `;
        innerProductContainer.appendChild(productDiv);
    });

    productContainer.appendChild(innerProductContainer);
    container.appendChild(titleElement);
    container.appendChild(descriptionElement);
    container.appendChild(productContainer);

    if (products.length < 4) {
        innerProductContainer.classList.add('centered');
    }
    // Adiciona indicadores visuais se houver mais de 4 produtos
    const leftArrow = document.createElement('span');
    leftArrow.className = 'arrow arrow-left';
    leftArrow.innerHTML = '&lt;'; // Seta para a esquerda
    leftArrow.style.display = 'none'; // Inicialmente oculta

    const rightArrow = document.createElement('span');
    rightArrow.className = 'arrow arrow-right';
    rightArrow.innerHTML = '&gt;'; // Seta para a direita
    rightArrow.style.display = 'none'; // Inicialmente oculta

    productContainer.appendChild(leftArrow);
    productContainer.appendChild(rightArrow);

    // Atualiza a visibilidade das setas
    updateArrowVisibility(leftArrow, rightArrow, products.length);


    // adiciona evento para setas
    rightArrow.addEventListener('click', () => {
        moveSlide(1, innerProductContainer, products.length, leftArrow, rightArrow);
    });

    leftArrow.addEventListener('click', () => {
        moveSlide(-1, innerProductContainer, products.length, leftArrow, rightArrow);
    });
}

function moveSlide(direction, productListContainer, totalProducts, leftArrow, rightArrow) {
    const visibleCount = 4; // num de produtos visíveis
    currentIndex += direction;

    // limita o índice
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalProducts - visibleCount) {
        currentIndex = totalProducts - visibleCount;
    }

    // atualiza a posição do container
    productListContainer.style.transform = `translateX(-${(currentIndex * 25)}%)`; // 25% para cada produto

    // atualiza a visibilidade das setas
    updateArrowVisibility(leftArrow, rightArrow, totalProducts);
}

function updateArrowVisibility(leftArrow, rightArrow, totalProducts) {
    const visibleCount = 4; // Número de produtos visíveis
    leftArrow.style.display = currentIndex > 0 ? 'block' : 'none'; // Exibe se há elementos à esquerda
    rightArrow.style.display = currentIndex < totalProducts - visibleCount ? 'block' : 'none'; // Exibe se há elementos à direita
}

// chama a função com diferentes títulos, descrições e listas de produtos
document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.querySelector('.products');
    loadProducts(productsContainer, "Promoção de Natal", "Descrição da promoção de aniversário!", [
        { name: "Produto1", description: "Descrição do Produto 1", price: "10,00", img: "../../src/img/imagensSabonetes/img2.jpg" },
        { name: "Produto2", description: "Descrição do Produto 2", price: "15,00", img: "../../src/img/imagensSabonetes/img5.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" },
        { name: "Produto1", description: "Descrição do Produto 1", price: "10,00", img: "../../src/img/imagensSabonetes/img2.jpg" },
        { name: "Produto2", description: "Descrição do Produto 2", price: "15,00", img: "../../src/img/imagensSabonetes/img5.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" }
    ]);
    loadProducts(productsContainer, "Promoção de Natal", "Descrição da promoção de aniversário!", [
        { name: "Produto1", description: "Descrição do Produto 1", price: "10,00", img: "../../src/img/imagensSabonetes/img2.jpg" },
        { name: "Produto2", description: "Descrição do Produto 2", price: "15,00", img: "../../src/img/imagensSabonetes/img5.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "30,00", img: "../../src/img/imagensSabonetes/img6.jpg" },
    ]);
    loadProducts(productsContainer, "Promoção de Natal", "Descrição da promoção de aniversário!", [
        { name: "Produto1", description: "Descrição do Produto 1", price: "10,00", img: "../../src/img/imagensSabonetes/img2.jpg" },
        { name: "Produto2", description: "Descrição do Produto 2", price: "15,00", img: "../../src/img/imagensSabonetes/img5.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" },
        { name: "Produto1", description: "Descrição do Produto 1", price: "10,00", img: "../../src/img/imagensSabonetes/img2.jpg" },
        { name: "Produto2", description: "Descrição do Produto 2", price: "15,00", img: "../../src/img/imagensSabonetes/img5.jpg" },
        { name: "Produto3", description: "", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" },
    ]);
});


// desabafo sincero, não sei oq fiz aqui, muito GPT pra corrigir, muito vídeo no youtube pra entender, muito energético pra ficar acordado, muito paracetamol pra aliviar a dor de cabeça por estar tanto tempo acordado, mas... FUNCIONA!
// COMO CARALHOS VOU FAZER PRA ISSO ESTAR LINKADO COM A CRIAÇÃO DE PRODUTOS NO SITE?! NÃO SEI, ÓTIMA PERGUNTA! PORÉM OS CARDS FUNCIONAM!
