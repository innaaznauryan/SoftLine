export default function renderBranches() {
    const branchesElement = document.getElementById("branches")
    const data = [
        {
            name: "Все",
            cities: "",
            dataText: "all"
        },
        {
            name: "Москва",
            cities: "",
            dataText: "moscow"
        },
        {
            name: "Центр",
            cities: ["Воронеж", "Ярославль", "Белгород"],
            dataText: "center"
        },
        {
            name: "Северо-Запад",
            cities: ["Санкт-Петербург", "Калининград"],
            dataText: "northwest"
        },
        {
            name: "Юг",
            cities: ["Ростов-на-Дону", "Краснодар", "Волгоград"],
            dataText: "south"
        },
        {
            name: "Волга",
            cities: ["Нижний Новгород", "Оренбург", "Уфа", "Самара", "Казань"],
            dataText: "volga"
        },
        {
            name: "Урал",
            cities: ["Екатеринбург", "Челябинск", "Пермь", "Сургут", "Тюмень", "Ижевск"],
            dataText: "ural"
        },
        {
            name: "Сибирь",
            cities: ["Новосибирск", "Омск", "Томск", "Красноярск", "Иркутск"],
            dataText: "sibir"
        },
        {
            name: "Дальний восток",
            cities: ["Хабаровск", "Владивосток"],
            dataText: "fareast"
        }
    ];

    (data => {
        function renderNestedUl(cities) {
            return cities.reduce((acc, item) => {
                return acc + `<li class="branches_hidden_menu_subitem">${item}</li>`
            }, "")
        }

        const menuItems = data.reduce((acc, item) => {
            return acc + `<li class="branches_nav_item" data-id=${item.dataText}><a>${item.name}</a></li>`
        }, "")

        const hiddenMenu = data.reduce((acc, item, index) => {
            if(index === 0) return acc
            const nestedUl = item.cities?.length ? `<ul>${renderNestedUl(item.cities)}</ul>` : ""
            return acc +    `<li class="branches_hidden_menu_item">
                                <div>
                                    ${item.name}
                                    <svg class="branches_hidden_menu_item_chevron" data-id=${index} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none">
                                        <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#444444"/>
                                    </svg>
                                </div>
                                ${nestedUl}
                            </li>`
        }, "")

        const menu = `<nav class="branches_nav">
                                <div class="container">
                                    <div class="branches_header">
                                        <span>Офисы Softline</span>
                                        <svg class="branches_chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none">
                                            <path d="M2.10156 7.99683L12.1016 16.0179L22.1016 7.99683" stroke="#444444" stroke-width="3"/>
                                        </svg>
                                   </div>
                                   <ul>${menuItems}</ul>
                                </div>
                             </nav>`

        branchesElement.innerHTML = menu + `<ul class="branches_hidden_menu"><div class="container">${hiddenMenu}</div></ul>`
        branchesElement.querySelector(".branches_nav_item").classList.add("active")

        const mainChevron = branchesElement.getElementsByClassName("branches_chevron")[0]
        const subChevrons = branchesElement.querySelectorAll(".branches_hidden_menu_item_chevron")

        mainChevron.addEventListener("click", (e) => {
            const menu = branchesElement.querySelector(".branches_nav > .container > ul")
            const hiddenMenu = branchesElement.getElementsByClassName("branches_hidden_menu")[0]
            const map = document.getElementById("map")
            menu.style.opacity = menu.style.opacity === "0.1" ? "1" : "0.1"
            map.style.opacity = map.style.opacity === "0.1" ? "1" : "0.1"
            menu.style.pointerEvents = menu.style.pointerEvents === "none" ? "auto" : "none"
            hiddenMenu.style.display = hiddenMenu.style.display === "block" ? "none" : "block"
            mainChevron.style.transform = mainChevron.style.transform === "rotateZ(180deg)" ? "" : "rotateZ(180deg)"
        })

        subChevrons.forEach(chevron => {
            chevron.addEventListener("click", () => {
                const index = chevron.dataset.id
                const parent = branchesElement.querySelectorAll(".branches_hidden_menu_item")[index - 1]
                const childUl = parent.querySelector("ul")
                chevron.style.transform = chevron.style.transform === "rotateZ(180deg)" ? "" : "rotateZ(180deg)"
                if(childUl) {
                    childUl.style.display = childUl.style.display === "block" ? "none" : "block"
                }
            })
        })

    })(data)
}