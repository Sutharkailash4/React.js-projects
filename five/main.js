import box from "./app.js";

let parent_box = document.querySelector('.root');

let root = ReactDOM.createRoot(parent_box);

root.render(box());