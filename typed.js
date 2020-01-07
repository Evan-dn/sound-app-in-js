import Typed from 'typed.js';

const options = {
  strings: ['Make music with only one tap...'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
};


const typedJs = () => {
    return new Typed('.typedjs', options);
};

export default typedJs;


// const dynamicAddEvent = () => {
//   if (document.querySelector('#type-script') == null)
//     return

//   new Typed('#type-script', {
//     strings: ["Borring with your life...", "It's time to do the Show !"],
//     typeSpeed: 50,
//     loop: true
//   });
// }

// export default dynamicAddEvent ;