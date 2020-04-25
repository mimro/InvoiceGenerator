import React, { Component } from 'react';

export class TableCell extends Component {

    constructor(props) {
        super(props);
        this.state = { editing: false };
    }

	render() {

		const { value, onChange } = this.props;

		return (this.state.editing || value==="") ?
			<td className="no-pad"><input className="form-control editor edit-text" ref='input' value={value} onChange={e => onChange(e.target.value)} onBlur={ e => this.onBlur()} /></td> :
			<td onClick={() => this.onFocus()}>{value}</td>
	}

	onFocus() {
		this.setState({ editing: true }, () => this.refs.input.focus());
	}

	onBlur() {
		this.setState({ editing: false });
	}
}


