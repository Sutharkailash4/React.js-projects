import App from './app.js';

let box = document.querySelector('.box');
let root = ReactDOM.createRoot(box);

root.render(React.createElement(App));