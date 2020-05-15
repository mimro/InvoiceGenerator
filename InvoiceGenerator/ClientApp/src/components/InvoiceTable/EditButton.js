import React, { Component } from 'react';
//import { Button } from 'reactstrap';
import { faTrashAlt, faArrowUp,faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles/EditButtons.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';

import { connect } from "react-redux";

import {
	removeItem,
	moveRowUp,
	moveRowDown
} from "../../actions";

type Props = {
   removeItem:Function,
   moveRowUp:Function,
	moveRowDown:Function
};
class EditButton extends Component {

    constructor(props : Props) {
        super(props);
    }

    render() {
	let {removeItem,moveRowUp,moveRowDown} = this.props
        return (
            <td>
                <a id="removeBin" title="Usuń" onClick={()=>removeItem(this.props.id)}><DeleteIcon/></a>
                <div class="up-down-buttons">
				
				<a id="moveRowUp" title="Przenieś do góry" onClick={() => moveRowUp(this.props.id)}><ArrowDropUpIcon id="arrowUpIcon"  /></a>
				<a id="moveRowDown" title="Przenieś do dołu" onClick={() => moveRowDown(this.props.id)}><ArrowDropDownIcon  id="arrowDownIcon" /></a>
				</div>

					
                </td>
        );
    }

	    removeRow(rowId) {
		this.props.removeItem(rowId);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        invoiceTableDetails: state.invoiceTableDetails,
    }
}
function mapDispatchToProps(dispatch) {
    return {
       removeItem: (id) => dispatch(removeItem(id)),
       moveRowUp: (id) => dispatch(moveRowUp(id)),
       moveRowDown: (id) => dispatch(moveRowDown(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);
