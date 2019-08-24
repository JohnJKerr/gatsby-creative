export default class Scroller {
  static handleAnchorScroll(e) {
    e.preventDefault();
    const element = e.target;
    const id = element.getAttribute('href');
    const document = element.ownerDocument.documentElement;
    const scrollNode = document.querySelector(id);
    const top = scrollNode.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.scrollTop;
    const scrollTo = top + scrollTop;
    if(document.scrollTo) {
      document.scrollTo({
        top: scrollTo,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      document.scrollTop = scrollTo;
    }
  }
}