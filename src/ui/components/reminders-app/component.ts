import Component, { tracked } from "@glimmer/component";

export default class Reminders extends Component {
  @tracked newTodoText = ''
  @tracked todos = [
    'First item',
    'Second item',
    'Third item'
  ]

  handleSubmit(event) {
    event.preventDefault();

    this.todos = [
      ...this.todos,
      this.newTodoText
    ];
  }

  handleKeyUp(event) {
    this.newTodoText = event.target.value;
  }
}
