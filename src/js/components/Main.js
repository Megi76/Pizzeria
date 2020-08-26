import {templates, select} from '../settings.js';

class Main {
  constructor(mainElement) {
    const thisMain = this;

    thisMain.render(mainElement);
  }

  render(mainElement) {
    const thisMain = this;

    const generatedHTML = templates.main();

    thisMain.dom = {};
    thisMain.dom.wrapper = mainElement;
    thisMain.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Main;
