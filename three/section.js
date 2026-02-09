let project_complete_number = React.createElement('h2',{id:'project_number'},"+200");
let startup_complete_number = React.createElement('h2',{id:'project_number'},"+50");

let project_complete_text = React.createElement('h2',{id:'project_text'},"project Completed");
let startup_complete_text = React.createElement('h2',{id:'project_text'},"Startup Raised");

let project_box = React.createElement('div',{id:'project_box'},[project_complete_number,project_complete_text]);
let startup_box = React.createElement('div',{id:'startup_box'},[startup_complete_number,startup_complete_text]);

let p_s_box = React.createElement('div',{id:'p_s_main_box'},[project_box,startup_box]);

let hello_text = React.createElement('h1',{id:'hello_text'},'Hello');
let hello_para = React.createElement('p',{id:'hello_para'},`-- it's D.Nova a design wizerd`);

let hello_main_box = React.createElement('div',{id:'hello_main_box'},[hello_text,hello_para]);

let scroll_text = React.createElement('p',{id:'scroll_para'},'Scroll Down');
let icon = React.createElement('i',{className:'ri-arrow-down-line'},null);
let scroll_arrow = React.createElement('span',null,icon);

let scroll_box = React.createElement('div',{id:'scroll_box'},[scroll_text,scroll_arrow]);

let all_div_main_box = React.createElement('div',{id:'all_div_main_box'},[p_s_box,hello_main_box,scroll_box]);

export default all_div_main_box;

{/* <i class="ri-arrow-down-fill"></i> */}