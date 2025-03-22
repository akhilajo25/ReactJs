
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello, World from Js";
// const root = document.getElementById('root');
// root.appendChild(heading);

const heading = React.createElement("h1",{'name':'Akhila'},'Hello World from React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)
