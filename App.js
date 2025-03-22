// <!-- Javascript style of implementation -->
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello, World from Js";
// const root = document.getElementById('root');
// root.appendChild(heading);

//React syle of implementation
const parent = React.createElement('div', { id: 'parent' }, 
    [React.createElement('div', { id: 'child' }, 
        [React.createElement("h1", { id: 'heading' }, 'Hello From h2 child of child'), 
            React.createElement("h2", { id: 'heading' }, 'Hello From h2 child of child')]),React.createElement('div', { id: 'child2' })]);
const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = React.createElement("h1", { id: 'heading' }, 'Hello World from React');
console.log(parent)
root.render(parent)

