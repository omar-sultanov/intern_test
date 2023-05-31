## **Тестовые задания:**
1) В приведенном ниже коде закрашены: 1 метод, 1 тип данных, 2
оператора. Необходимо вставить вместо красных прямоугольников то, что
вы считаете должно быть на их месте, исходя из ТЗ. (Ответы пришлите в
сопроводительном письме)
ТЗ: Получить json с постами и вывести в консоль заголовок (title) поста, id
которого равен 15.
```
interface ResData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class FifteenTitle {
  static #URL = 'https://jsonplaceholder.typicode.com/posts';
  static #ID = 15;

  static #get() {
    fetch(FifteenTitle.#URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((resData) => FifteenTitle.#getTitleFromJson(resData))
      .then((title) => console.log(title))
      .catch(({ message }) => console.error(message));
  }
  static #getTitleFromJson(resData: ResData[]) {
    const itemWithTitle = resData.find((item) => item.id === FifteenTitle.#ID);
    const title = itemWithTitle.title
    return title
  }

  run() {
    FifteenTitle.#get();
  }
}

const fifteenTitle = new FifteenTitle();
fifteenTitle.run();
```

2) В приведенном ниже коде закрашены: 1 тег списка, 1 значение
атрибута, 2 семантических тега. Необходимо вставить вместо красных
прямоугольников то, что вы считаете должно быть на их месте, исходя из
ТЗ. (Ответы пришлите в сопроводительном письме)
ТЗ: Сверстать шапку сайта (header)
```
<header class="header">
    <nav class="header__menu">
        <ul class="header__list">
            <li class="header__logo">
                <a href="/">
                    <picture>
                        <source srcset="/assets/img/logo.webp" type="image/webp"/>
                    </picture>
                </a>
            </li>
            <li class="header__item">
                <a href="/football">Футбол</a>
            </li>
            <li class="header__item">
                <a href="/basketball">Баскетбол</a>
            </li>
            <li class="header__item">
                <a href="/voleyball">Волейбол</a>
            </li>
            <li class="header__item">
                <a href="/hockey">Хоккей</a>
            </li>
        </ul>
    </nav>
</header>
```