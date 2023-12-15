export default function renderHeader () {
    const headerElement = document.getElementById("header")
    headerElement.innerHTML =
        `<header>
            <div class="container header_container">
                <h1>Поставщик услуг цифровой трансформации и кибербезопасности</h1>
                <button><a href="https://softline.ru" target="_blank">На сайт</a></button>
            </div>
        </header>`
}
