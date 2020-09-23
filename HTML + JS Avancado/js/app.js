import Controller from './controller';

export default class App{

    constructor(){

    console.log("entrou app");
    this.init();

    new Controller();
    }

    init =( ) =>
    {
        var index = document.getElementById("index");
        index.style.position = "absolute";
        index.style.top = "10px";
        index.style.left = "10px";
        index.style.width = "800px";
        index.style.height = "400px";
        index.style.border = " 1px solid";
        index.style.borderColor = "DCDCDC";
    }
}

new App();