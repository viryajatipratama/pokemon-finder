class jumboTron extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        @font-face {
            font-family: 'Hollow';
            src: url(/src/font/Pokemon/Hollow.ttf);
        }
        *{
            margin: 0;
            padding: 0;
        }
        
        h1{
            background-color:#DFDFDF;
            font-family: 'Hollow';
            letter-spacing: 6px;
            font-size: 75px;
            -webkit-text-stroke:1px #0075BE;
            -webkit-text-fill-color: #ffcb05; ;
            max-width: 100%;
            padding:25px;
        }
        img{
            width:8%;
            float:left;
            display:block;
            margin-top:63px;
        }
        </style>
        <img src="/img/pikachu.png">
        <h1>PoKéMoN</h1>
        `
    }
}

customElements.define('jumbo-tron', jumboTron);
