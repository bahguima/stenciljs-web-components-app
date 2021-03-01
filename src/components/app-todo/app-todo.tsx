import { Component, h, State, Host } from '@stencil/core';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true
})
export class TodoComponent {

  @State() task:string = ''
  @State() tasks:string[] = []


  handleSubmit = (ev: Event)=>{
    ev.preventDefault()
    if (this.task.trim()){
      this.task =''
    }
    console.log('Adicionando ...')
  }

  handleInput=(ev: Event)=>{
    const field = ev.target as HTMLInputElement
    console.log(field.value)
    this.task = field.value
  }


  render() {
    return (
      <Host>
      <form onSubmit={this.handleSubmit}>
        <input 
          onInput={this.handleInput}
           value={this.task}>
        </input>
        <button>Adicionar</button>
      </form>
      <ul>
        {this.tasks.map((t, i) => <li>{t}</li>)}
      </ul>
      </Host>
    );
  }
}
