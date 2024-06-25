import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get tag() {
    return 'polaris-chip';
  }
 
  static get styles() {

    return css`
    :host{
      display: block;
    }
    `;
  }

  

    render() {
      return html`
      <span>${this.title}</span>`;

    }
  }