function loadCss() {
    const cssHTML = `
    !-- Style padrão do site -->
    <link rel="stylesheet" href="../../src/css/style.css">

    <!-- Style do header -->
    <link rel="stylesheet" href="../../src/css/header/header.css">

    <!-- Style do init -->
    <link rel="stylesheet" href="../../src/css/initialSite/initial.css">

    <!-- Style do footer -->
    <link rel="stylesheet" href="../../src/css/footer/footer.css">

    <!-- Style dos cards de produtos -->
    <link rel="stylesheet" href="../../src/css/products/products.css">

    <!-- Style do Favicon -->
    <link rel="shortcut icon" type="image/png" href="./images/icon.ico"><link rel="shortcut icon" type="imagex/png" href="../../src/img/logo.svg">
    `;

    
    document.getElementById('css').innerHTML = cssHTML;
}
document.addEventListener("DOMContentLoaded", loadCss);