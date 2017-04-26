import Component, { tracked } from "@glimmer/component";

export default class Reminders extends Component {
  @tracked todos = [
    'First item',
    'Second item',
    'Third item'
  ]

  @tracked("todos")
  get count() {
    switch(this.todos.length) {
      case 0;
        return "no items";
      case 1:
        return "one item";
      default:
        return `${this.todos.length} items`;
    }
  }

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
