import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kth-tooltip',
  styleUrl: 'kth-tooltip.css',
  shadow: true,
})
export class KthTooltip {
  @Prop() message: string;

  render() {
    return (
      <Host>
        <slot name="tooltip-target"></slot>
        <div>{this.message}</div>
      </Host>
    );
  }
}
