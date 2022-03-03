
import React, { Component } from "react";

export default function asyncComponent(importComponent: Function) {
  class AsyncComponent extends Component<any, any> {
    constructor(props:object) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    public render():JSX.Element {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <div></div>;
    }
  }

  return AsyncComponent;
}