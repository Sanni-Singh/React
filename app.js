// const holding = React.createElement('h1',{
//     id:"h1to",
//     xnt:"abc"
// },"Hellow");
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(holding);


// let sol = React.createElement('div',{id:"one"},[
//     .React.createElement('div',{class:red},[
//     .React.createElement('h1',{class:three},"Hellow")
//     .React.createElement('h2',{class:four},"Hellow i am going to schol")
//     ])
// )]
// })

let sol = React.createElement('div',{id:"one"},[
    React.createElement('div',{id:"two"},[
        React.createElement('h1',{},"Hello i am here"),
        React.createElement('h2',{},"Hello i am here to do parpit"),
    ]),
    React.createElement('div',{id:"there"},[
        React.createElement('h3',{},"chl re vc"),
        React.createElement('h4',{},"System fad dunga"),
    ]),
]);

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(sol);