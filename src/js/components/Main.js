import {templates, classNames, select} from '../settings.js';

class Main {
  constructor(mainElement) {
    const thisMain = this;

    thisMain.render(mainElement);
    this.linksToPages();

  }

  render(mainElement) {
    const thisMain = this;

    const generatedHTML = templates.main();

    thisMain.dom = {};
    thisMain.dom.wrapper = mainElement;
    thisMain.dom.wrapper.innerHTML = generatedHTML;
  }

  linksToPages(){

    const linkToOrder = document.getElementById('page-order');
    console.log(linkToOrder);
    const linkToOrderId = linkToOrder.getAttribute('href').replace('#', '');


    const linkToBooking = document.getElementById('page-booking');
    console.log(linkToBooking);
    const linkToBookingId = linkToBooking.getAttribute('href').replace('#', '');

    const pages = document.querySelector(select.containerOf.pages).children;

    linkToOrder.addEventListener('click', function(){
      for(let page of pages){
        if(page.id == linkToOrderId){
          page.classList.add(classNames.pages.active);
        } else {
          page.classList.remove(classNames.pages.active);
        }
      }
    });

    linkToBooking.addEventListener('click', function(){
      for(let page of pages){
        if(page.id == linkToBookingId){
          page.classList.add(classNames.pages.active);
        } else {
          page.classList.remove(classNames.pages.active);
        }
      }
    });
  }
}

export default Main;
