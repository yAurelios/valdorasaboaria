function loadCss() {
    const cssHTML = `
    !-- Style padrão do site -->
    <link rel="stylesheet" href="../../src/css/style.css">;

    <!-- Style do header -->
    <link rel="stylesheet" href="../../src/css/header/header.css">;

    <!-- Style do init -->
    <link rel="stylesheet" href="../../src/css/initialSite/initial.css">;

    <!-- Style do footer -->
    <link rel="stylesheet" href="../../src/css/footer/footer.css">;

    <!-- Style dos cards de produtos -->
    <link rel="stylesheet" href="../../src/css/products/products.css">;

    <!-- Style da Story -->
    <link rel="stylesheet" href="../../src/css/initialSite/story.css">;
    `;


    
    document.getElementById('css').innerHTML = cssHTML;
}
document.addEventListener("DOMContentLoaded", loadCss);