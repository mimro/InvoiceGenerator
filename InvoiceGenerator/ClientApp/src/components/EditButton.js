import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class EditButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td>
                <Button>Edytuj</Button>
                </td>
        );
    }

}
