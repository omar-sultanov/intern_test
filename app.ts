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

    // Здесь  возникает ошибка из-за того, что метод find может вернуть "undefined"
    // const title = itemWithTitle.title
    // return title

    // Чтобы исправить ошибку следует добавить условия
    if (itemWithTitle) {
      const title = itemWithTitle.title;
      return title;
    }
    return "" // Можно добавить значение по умолчанию
  }

  run() {
    FifteenTitle.#get();
  }
}

const fifteenTitle = new FifteenTitle();
fifteenTitle.run();
