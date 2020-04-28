import React, { Component } from 'react';

export class TableHeader extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(<th >{this.props.value}</th>)
	}
}
