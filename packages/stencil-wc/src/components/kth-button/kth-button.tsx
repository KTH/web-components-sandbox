import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kth-button',
  styleUrl: 'kth-button.css',
  shadow: true,
})
export class KthButton {
  @Prop() disabled: boolean;

  render() {
    return (
      <button disabled={this.disabled}>
        <slot></slot>
      </button>
    );
  }
}
