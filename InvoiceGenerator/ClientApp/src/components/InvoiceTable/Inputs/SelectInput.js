import React, { Component } from 'react';

export class SelectInput extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return		<select id="jm" name="jm" ref='input' value={this.props.value} onChange={e => this.props.onChange(e.target.value)} onBlur={this.props.onBlur}>
				<option value="ryczałt">ryczałt</option>
				<option value="km">km</option>
				<option value="szt">szt</option>
			</select>
	}

	onFocus = () => this.refs.input.focus();


}
