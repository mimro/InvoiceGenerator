import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class TextInput extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <TextField  label="Nazwa"  className="editor edit-text" ref='input' value={this.props.value} onChange={e => this.props.onChange(e.target.value)} onBlur={this.props.onBlur} />
	}

	onFocus = () => this.refs.input.focus();


}


