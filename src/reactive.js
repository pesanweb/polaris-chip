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
    <button @click=${()=>this._changeNameProperty('Rubah nilai "nameeeeee"')}>Ubah teks 
    </button>
    
    <h3>${this.name}</h3>
    <h6>${this.class}</h6>
    `;
 }

 _changeNameProperty(value = null) {
   this.name = value;
 }

}

customElements.define('reactive-element', MyReactive);