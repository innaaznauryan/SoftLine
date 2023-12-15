import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';

export default function renderBusiness() {
    const businessElement = document.getElementById("business")
    businessElement.innerHTML = `<h2>Направления бизнеса</h2>
                                <div class="business_grid"></div>`

    const data = [
        {
            title: "Решения Softline",
            content: "ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.",
            image: image1
        },
        {
            title: "Кибербезопасность",
            content: "Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.",
            image: image2
        },
        {
            title: "Импортозамещение",
            content: "ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.",
            image: image3
        },
        {
            title: "Облачные решения",
            content: "Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.",
            image: image4
        },
        {
            title: "Цифровая трансформация и разработка ПО",
            content: "Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. B штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.",
            image: image5
        },
        {
            title: "Техническая поддержка Softline",
            content: "200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство c 30+ мировыми производителями.",
            image: image6
        }
    ];

    (data => {
        businessElement.querySelector(".business_grid").innerHTML = data.reduce((acc, item, index) => {
            return acc +
                `<div class="business_grid_card" style="background-image: url( ${item.image})">
                    <div class="business_grid_card_heading">
                        <h3>${item.title}</h3>
                        <svg class="business_grid_card_chevron" data-id=${index} xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                            <path d="M1.57129 0.785767L7.99986 7.21434L14.4284 0.785767" stroke="white" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="business_grid_card_hover">
                        <h4>${item.title}</h4>
                        <p>${item.content}</p>
                    </div>
                </div>`
        }, "")

        const chevrons = businessElement.querySelectorAll(".business_grid_card_chevron")
        chevrons.forEach(chevron => {
            chevron.addEventListener("click", (e) => {
                const index = chevron.dataset.id
                const accordeon = businessElement.querySelectorAll(".business_grid_card_hover")[index]
                accordeon.style.display = accordeon.style.display === "block" ? "none" : "block"
                chevron.style.transform = chevron.style.transform === "rotateZ(180deg)" ? "" : "rotateZ(180deg)"
            })
        })
    })(data)
}



