import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-table',
  styleUrl: 'app-table.css',
  shadow: true,
})
export class AppTable {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
