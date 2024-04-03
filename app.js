const parent = React.createElement('div',{id:'parent'},[React.createElement('div',{id:"child"},[React.createElement('h1',{},"This is a nested div made by React")],React.createElement('h1',{},"This i s  sibling  made by React")),React.createElement('div',{id:"chi  ld2"},[React.createElement('h1',{},"This is a nested div made by React")],React.createElement('h1',{},"This i s  sibling  made by React"))])

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)

// const heading= React.createElement("h1",{id:"heading"},"hello World");
//      const root = ReactDOM.createRoot(document.getElementById("root"));
//      console.log(heading)
//      root.render(heading)