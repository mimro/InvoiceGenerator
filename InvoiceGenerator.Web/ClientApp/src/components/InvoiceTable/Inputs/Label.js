import React, { Component } from 'react';

export class Label extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <label  ref='input' value={this.props.value} />
	}

	onFocus = () => function () { };


}


