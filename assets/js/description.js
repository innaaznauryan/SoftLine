export default function renderDescription () {
    const descriptionElement = document.getElementById("description")
    descriptionElement.innerHTML =
        `<div class="container">
            <p class="desc_paragraph">
                <span>Softline</span>
                – ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное
                и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр
                IT-услуг.
            </p>
        </div>`
}