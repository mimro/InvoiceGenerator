import React, { Component } from 'react';

export class NumberInput extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <input type="number" className="form-control editor edit-text" ref='input' value={this.props.value} onChange={e => this.props.onChange(e.target.value)} onBlur={this.props.onBlur} />
	}

	onFocus = () => this.refs.input.focus();


}


