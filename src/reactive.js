import { LitElement,html } from "lit";

class MyReactive extends LitElement{
 static properties = {
    name: {
        type:String
    },
 };

 constructor(){
    super();
    this.name = 'Belajar reactive property di LIT';
    this.class = 'Pemula';
 }

 render() {
    return html` <h1>${this.name}</h1>
    
    <h3>${this.name}</h3>
    <h6>${this.class}</h6>
    `;
 }

}

customElements.define('reactive-element', MyReactive);