let arrow_icon = React.createElement('i',{className:'ri-arrow-right-up-line'},null);
let header_arrow = React.createElement('span',{id:'arrow_span'},arrow_icon);
let right_logo = React.createElement(
    'h3',
    { id: 'header_logo' },
    ['Book a call',header_arrow]
);

let list_1 = React.createElement('li', { id: 'list' }, 'About Me');
let list_2 = React.createElement('li', { id: 'list' }, 'Portfolio');
let list_3 = React.createElement('li', { id: 'list' }, 'Services');
let list_4 = React.createElement('li', { id: 'list' }, 'Biog');

let ul = React.createElement('ul', null, [
    list_1,
    list_2,
    list_3,
    list_4
]);

let nav = React.createElement('nav', null, ul);

let header = React.createElement('header', null, [nav, right_logo]);

export default header;