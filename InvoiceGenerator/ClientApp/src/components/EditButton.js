import React, { Component } from 'react';
//import { Button } from 'reactstrap';
import { faTrashAlt, faArrowUp,faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles/EditButtons.css'

export class EditButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td>
                <a className="button-edit" title="Usuń" onClick={() => this.props.removeRow(this.props.id)}><FontAwesomeIcon icon={faTrashAlt} /></a>
                <div class="up-down-buttons">
                    <a className="button-edit" title="Przenieś do góry" onClick={() => this.props.moveRowUp(this.props.id)}><FontAwesomeIcon icon={faArrowUp} /></a>

                    <a className="button-edit" title="Przenieś do dołu" onClick={() => this.props.moveRowDown(this.props.id)}><FontAwesomeIcon icon={faArrowDown} /></a>
                </div>
                </td>
        );
    }
}
