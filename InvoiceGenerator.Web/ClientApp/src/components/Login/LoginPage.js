import React from 'react';
import LoginForm from './LoginForm';
import Paper from '@material-ui/core/Paper';

class LoginPage extends React.Component {
    render() {
        return (
            <Paper className="row">
                <LoginForm/>
            </Paper>
            );
    }
}

export default LoginPage;