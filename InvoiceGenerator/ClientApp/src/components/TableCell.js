import React, { Component } from 'react';
import { InputField } from './InputField';

export class TableCell extends Component {

    constructor(props) {
        super(props);
        this.state = { editing: false };
    }

	render() {

		const { value, onChange } = this.props;
		if (value === "") {
			this.state.editing = true;
        }
		return this.state.editing ?
			<td className="no-pad"><input className="form-control editor edit-text" ref='input' value={value} onChange={e => onChange(e.target.value)} onBlur={e => this.onBlur()} /></td> :
			<td onClick={() => this.onFocus()}>{value}</td>
	}

	onFocus() {
		this.setState({ editing: true }, () => this.refs.input.focus());
	}

	onBlur() {
		this.setState({ editing: false });
	}
}


