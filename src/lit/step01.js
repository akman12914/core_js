import { LitElement, html } from "lit";

class MyElement extends LitElement {
  static properties = {
    version: {},

    // X version : {값}
    // 대상 값 설정은 constructor안에서만
  };
  constructor() {
    super();

    this.version = "1.0.0";
  }

  render() {
    return html`<div>${this.version}</div> `;
  }
}

customElements.define("my-element", MyElement);
app.append(document.createElement("my-element"));
