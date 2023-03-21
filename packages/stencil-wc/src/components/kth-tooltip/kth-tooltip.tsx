import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kth-tooltip',
  styleUrl: 'kth-tooltip.css',
  shadow: true,
})
export class KthTooltip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
