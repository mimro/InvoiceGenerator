import React, { Component } from 'react';

export class InputField extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return	<input className="form-control editor edit-text"  value={this.props.value} onChange={e => this.props.onChange(e.target.value)} onBlur={e => this.onBlur()} />
	}

}


