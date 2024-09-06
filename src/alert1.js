import { html, LitElement } from "lit";

class MyElement extends LitElement {
    render() {
        return html`
        <button @click=${this._showAlert}>
            Click Me!
        </button>
        `;
    }

    _showAlert(e) {
        window.alert('Alert sudah tampil');
    }
}

customElements.define('my-alert', MyElement);