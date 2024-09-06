import { html, LitElement, css } from "lit";

class MyElement extends LitElement {
    static styles = css`
    p{
        color: green;
    }
    `;

    render() {
        return html`

        <p>Di bawah ada tombol dan paragrap ini berwarna hijau!!!!!</p>
        <button @click=${this._showAlert}>
            Click Me!
        </button>
        `;
    }

    _showAlert(e) {
        window.alert('Alert sudah tampil');
    }
}

customElements.define('tag-lateral', MyElement);