import { LitElement, html } from "lit";

class NameTag extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();

    this.name = "너의 이름은 뭐냐?";

    this.querySelector;
  }

  handleInput(e) {
    this.name = e.target.value;
  }

  handleClick() {
    alert(this.name);
  }

  render() {
    return html/* html */ `
      <p>안녕, ${this.name}</p>
      <input @input=${this.handleInput} type="text" placeholder="이름을 입력해주세요" />
      <button @click=${this.handleClick} type="button">Click me</button>
    `;
  }
}

customElements.define("name-tag", NameTag);

app.append(document.createElement("name-tag"));
