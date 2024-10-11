let currentIndex = 0;

// Função para criar e abrir o modal com as informações do produto
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'none'; // Inicia escondido

    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="" alt="Product Image" class="modal-image">
            <section>
                <h2 class="modal-title"></h2>
                <p class="modal-description"></p>
                <p class="modal-price"></p>
            <button class="buy-now">Comprar</button>
            <button class="addToMyCart" href="#"><img src="../../src/img/logoIcons/shoppingCart.svg" alt="Carrinho">
                <p>Adicionar ao Carrinho</p>
            </button>
            </section>
        </div>
    `;
    document.body.appendChild(modal);

    // Evento para fechar o modal ao clicar no botão de fechar
    const closeModalButton = modal.querySelector('.modal-close');
    closeModalButton.addEventListener('click', closeModal);

    // Fechar o modal ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Permite scroll na página novamente
    }

    return modal;
}

// Função para abrir o modal com as informações do produto
function openModal(product, modal) {
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalPrice = modal.querySelector('.modal-price');

    modalImage.src = product.img;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modalPrice.textContent = `Preço: R$ ${product.price}`;

    modal.style.display = 'block'; // Exibe o modal
    document.body.style.overflow = 'hidden'; // Impede o scroll na página
}

// Função para carregar os produtos
function loadProducts(container, title, description, products) {
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    const productContainer = document.createElement('div');
    productContainer.className = 'slider';

    const innerProductContainer = document.createElement('div');
    innerProductContainer.className = 'productContainer';

    const modal = createModal(); // Cria o modal uma vez

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'productsList';
        productDiv.innerHTML = `
            <figure>
                <img src="${product.img}" alt="${product.name}">
            </figure>
            <h2>${product.name}</h2>
            <p>Preço: R$ ${product.price}</p>
            <button class="viewProducts">View</button>
        `;

        // Evento de clique no botão "View" para abrir o modal
        productDiv.querySelector('.viewProducts').addEventListener('click', () => openModal(product, modal));

        innerProductContainer.appendChild(productDiv);
    });

    productContainer.appendChild(innerProductContainer);
    container.appendChild(titleElement);
    container.appendChild(descriptionElement);
    container.appendChild(productContainer);

    // Adiciona a classe 'centered' se houver menos de 4 produtos
    if (products.length < 4) {
        innerProductContainer.classList.add('centered');
    }

    if (products.length > 4) {
        const leftArrow = document.createElement('span');
        leftArrow.className = 'arrow arrow-left';
        leftArrow.innerHTML = '&lt;';
        leftArrow.style.display = 'none'; 

        const rightArrow = document.createElement('span');
        rightArrow.className = 'arrow arrow-right';
        rightArrow.innerHTML = '&gt;';
        rightArrow.style.display = 'none'; 

        productContainer.appendChild(leftArrow);
        productContainer.appendChild(rightArrow);

        updateArrowVisibility(leftArrow, rightArrow, products.length);

        rightArrow.addEventListener('click', () => {
            moveSlide(1, innerProductContainer, products.length, leftArrow, rightArrow);
        });

        leftArrow.addEventListener('click', () => {
            moveSlide(-1, innerProductContainer, products.length, leftArrow, rightArrow);
        });
    }
}

// Função para mover o slide de produtos
function moveSlide(direction, productListContainer, totalProducts, leftArrow, rightArrow) {
    const visibleCount = 4;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalProducts - visibleCount) {
        currentIndex = totalProducts - visibleCount;
    }

    productListContainer.style.transform = `translateX(-${(currentIndex * 25)}%)`;

    updateArrowVisibility(leftArrow, rightArrow, totalProducts);
}

// Função para atualizar a visibilidade das setas
function updateArrowVisibility(leftArrow, rightArrow, totalProducts) {
    const visibleCount = 4;
    leftArrow.style.display = currentIndex > 0 ? 'block' : 'none';
    rightArrow.style.display = currentIndex < totalProducts - visibleCount ? 'block' : 'none';
}

// Inicializa os produtos e chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.querySelector('.products');
    loadProducts(productsContainer, "Promoção de Natal", "Descrição da promoção de natal!", [
        { name: "Produto1", description: "Descrição do Produto 1", price: "10,00", img: "../../src/img/imagensSabonetes/img2.jpg" },
        { name: "Produto2", description: "Descrição do Produto 2", price: "15,00", img: "../../src/img/imagensSabonetes/img5.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" }
    ]);
    loadProducts(productsContainer, "Promoção de Natal", "Descrição da promoção de natal!", [
        { name: "Produto1", description: "Descrição do Produto 1", price: "10,00", img: "../../src/img/imagensSabonetes/img2.jpg" },
        { name: "Produto2", description: "Descrição do Produto 2", price: "15,00", img: "../../src/img/imagensSabonetes/img5.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" },
        { name: "Produto3", description: "Descrição do Produto 3", price: "20,00", img: "../../src/img/imagensSabonetes/img6.jpg" }
    ]);
});
