import Component, { tracked } from "@glimmer/component";

export default class FormNew extends Component {
  @tracked newTodoText = ''

  handleSubmit(event) {
    event.preventDefault();

    this.args.onCreate(this.newTodoText);
    this.newTodoText = '';
  }

  handleKeyUp(event) {
    this.newTodoText = event.target.value;
  }
}
