import refs from './utils/refs';
import initialFetchAPI from './services/initialFetchApi';
import { makeOnePage } from './1InitialHomePage';

const changePageNumber = () => {
  const currentPage = initialFetchAPI.page;

  return (refs.pageButton.textContent = currentPage);
};

const nextPage = target => {
  refs.myLibHome.innerHTML = '';

  initialFetchAPI.incrementPage();
  console.log(target);
  makeOnePage();
  changePageNumber();
};

const prevPage = () => {
  const currentPage = initialFetchAPI.page;

  if (currentPage <= 1) {
    return;
  }

  refs.myLibHome.innerHTML = '';

  initialFetchAPI.decrementPage();

  makeOnePage();
  changePageNumber();
};

refs.nextButton.addEventListener('click', nextPage);
refs.prevButton.addEventListener('click', prevPage);

export { prevPage, nextPage, changePageNumber };
