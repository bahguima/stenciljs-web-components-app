import { Component, State,  h } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {

  @State() task:string = ''
  handleSubmit = (ev: Event)=>{
    ev.preventDefault()
    if (this.task.trim()){
      this.task = ''
    }
  }

  handleInput=(ev: Event)=>{
    const field = ev.target as HTMLInputElement
    console.log(field.value)
    this.task = field.value
  }


  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <input 
          onInput={this.handleInput}
          value={this.task}>
        </input>
        <button>Adicionar</button>
      </form>
     
    );
  }

}
