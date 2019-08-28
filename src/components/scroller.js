export default class Scroller {
  static handleAnchorScroll(e) {
    e.preventDefault();
    const element = e.target;
    const id = element.getAttribute('href');
    const document = element.ownerDocument.scrollingElement || element.ownerDocument.documentElement;
    const scrollNode = document.querySelector(id);
    const top = scrollNode.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.scrollTop;
    const fixedHeight = 72;
    const scrollTo = top + scrollTop - fixedHeight;
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