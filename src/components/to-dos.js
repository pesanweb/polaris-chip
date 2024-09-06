import { LitElement, html, css } from "lit";

class ToDos extends LitElement {
    static properties = {
        ordered: {
            type: Boolean,
            reflect: true,
        },

        todos: {
            type: Array,
            reflect: true,
        },
    };

// text docoration underline overline; // text docoration underline, overline; underline overline;line-through; 
// referensi css https://www.w3schools.com/cssref/css3_pr_text-decoration-style.php

    static styles = css`
    li[completed] {
      /* text-decoration: underline overline;
      text-decoration-style: wavy; */
      text-decoration-line: underline;
      text-decoration-style: double;
      color: burlywood

    }

    li .todo-title {
      margin-inline-end: 4px;
    }
  `;

    constructor() {
        super();
        this.ordered = false;
    }

    render() {
        return html`
      ${this.ordered
                ? this._templateOrderedList()
                : this._templateUnorderedList()}
    `;
    }

    _templateOrderedList() {
        return html`
      <ol>
        ${this.todos.map((item) => this._templateListItem(item))}
      </ol>
    `;
    }

    _templateUnorderedList() {
        return html`
      <ul>
        ${this.todos.map((item) => this._templateListItem(item))}
      </ul>
    `;
    }

    _templateListItem(todo) {
        return html`
      <li ?completed=${todo.completed}>
        <span class="todo-title"> ${todo.title} </span>
        <button @click=${() => this._completeTodo(todo)}>
          ${todo.completed ? "Tandai Belum Selesai Boss" : "Bosss Selesai"}
        </button>
      </li>
    `;
    }

    _completeTodo(todo) {
        todo.completed = !todo.completed;
        this.requestUpdate();
    }
}

customElements.define("to-dos", ToDos);
