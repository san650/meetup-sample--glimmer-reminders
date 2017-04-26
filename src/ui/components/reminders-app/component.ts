import Component, { tracked } from "@glimmer/component";

export default class Reminders extends Component {
  @tracked newTodoText = ''

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.newTodoText);
  }

  handleKeyUp(event) {
    this.newTodoText = event.target.value;
  }
}
