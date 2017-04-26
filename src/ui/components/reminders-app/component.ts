import Component, { tracked } from "@glimmer/component";

export default class Reminders extends Component {
  @tracked todos = [
    'First item',
    'Second item',
    'Third item'
  ]

  handleCreate(item) {
    this.todos = [
      ...this.todos,
      item
    ];
  }

  handleKeyUp(event) {
    this.newTodoText = event.target.value;
  }
}
