const readingTime = () => {
  const article = document.querySelector('.article-body');

  if (article) {
    const articleLength = article.innerText.split(" ").length;
    const wordsPerMinute = 200; // Average case.
    let result;
    if (articleLength > 0) {
      const value = Math.ceil(articleLength / wordsPerMinute);
      result = `${value} min de lecture`;
    }
    const htmlElement = document.querySelector(".reading_time");
    htmlElement.insertAdjacentHTML("beforeend", `<i class="far fa-clock"></i>${result}`);
  }
};

export { readingTime };
