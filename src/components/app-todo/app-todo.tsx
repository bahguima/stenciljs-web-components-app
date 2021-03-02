import { Component, h, State, Host } from '@stencil/core';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true
})
export class TodoComponent {

  @State() tasks:string[] = []

  render() {
    return (
      <Host>
        <app-form></app-form>
      <ul>
        {this.tasks.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
      </Host>
    );
  }
}
