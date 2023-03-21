import { Component, Host, h, Prop, State } from '@stencil/core';
import { createPopper } from '@popperjs/core';

@Component({
  tag: 'kth-tooltip',
  styleUrl: 'kth-tooltip.css',
  shadow: true,
})
export class KthTooltip {
  @Prop() message: string;
  button: HTMLButtonElement;
  tooltip: HTMLDivElement;

  @State() hovered: boolean;

  componentDidRender() {
    createPopper(this.button, this.tooltip);
  }

  render() {
    return (
      <Host>
        <button
          ref={e => {
            this.button = e;
          }}
          onMouseEnter={() => {
            this.hovered = true;
          }}
          onMouseLeave={() => {
            this.hovered = false;
          }}
        >
          <slot></slot>
        </button>
        <div hidden={!this.hovered} ref={e => (this.tooltip = e)} class="tooltip">
          {this.message}
        </div>
      </Host>
    );
  }
}
