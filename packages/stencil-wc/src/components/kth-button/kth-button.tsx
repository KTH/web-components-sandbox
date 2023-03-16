import { Component, h } from '@stencil/core';

@Component({
  tag: 'kth-button',
  styleUrl: 'kth-button.css',
  shadow: true,
})
export class KthButton {
  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }
}
