export function Content() {
    let h1 = React.createElement('h2', null, 'React without JSX');
    let h2 = React.createElement('h2', null, 'Using createElement');
    let h3 = React.createElement('h2', null, 'Single Root Rule');

    return React.createElement('div', null, [h1, h2, h3]);
}
