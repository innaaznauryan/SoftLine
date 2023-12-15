export default function renderStatistics() {
    const statisticsElement = document.getElementById("statistics")

    const data = [
        {
            quantity: "> 30 лет",
            feature: "на IT-рынке"
        },
        {
            quantity: "4600",
            feature: "сотрудников в России"
        },
        {
            quantity: "25",
            feature: "городов России"
        },
        {
            quantity: "2000 +",
            feature: "разработчиков"
        },
        {
            quantity: "3000 +",
            feature: "сотрудников ежегодно проходят оценку и обучение"
        }
    ];

    (data => {
        statisticsElement.innerHTML = data.reduce((acc, item) => {
            return acc +
                `<div class="statistics_item">
                    <span class="statistics_item_quantity">${item.quantity}</span>
                    <span class="statistics_item_feature">${item.feature}</span>
                </div>`
        }, "")
    })(data)
}