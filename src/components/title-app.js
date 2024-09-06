import { LitElement, html, css } from "lit";

class TitleApp extends LitElement {
    static styles = css`
    h1 {
        text-align: center;
    }
    `;

    render() {
        return html`
        <h1> To Do App</h1>
        `;
    }
}

customElements.define('title-app', TitleApp);