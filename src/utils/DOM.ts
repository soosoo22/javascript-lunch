function validateSelector(selector: string) {
  if (selector === '' || selector === undefined) {
    throw new Error('잘못된 셀렉터 값입니다.');
  }
}

const DOM = {
<<<<<<< HEAD
  $: (selector: string) => {
    try {
      validateSelector(selector);
      return document.querySelector(selector);
=======
  $: (selector: string, target: HTMLElement | Document = document) => {
    try {
      validateSelector(selector);
      return target.querySelector(selector);
>>>>>>> step2
    } catch (error) {
      alert(error);
      return;
    }
  },
  $$: (selector: string) => {
    try {
      validateSelector(selector);
      return document.querySelectorAll(selector);
    } catch (error) {
      alert(error);
      return [];
    }
  },
};

export default DOM;
