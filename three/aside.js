let logo_img = React.createElement('img', { src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D", id: 'img' });
let logo = React.createElement('div', { id: 'logo_box' }, logo_img);

let p_year = React.createElement('p', { id: 'aside_para' }, 'Product Designer');
let line = React.createElement('div', { id: 'line' }, null);
let p_text = React.createElement(
  'p',
  { id: 'aside_para_text' },
  '2024'
);

let aside_inner_box = React.createElement(
  'div',
  { id: 'inner_box' },
  [p_year, line, p_text]
);

let main_aside = React.createElement('aside', null, [
  logo,
  aside_inner_box
]);

export default main_aside;
