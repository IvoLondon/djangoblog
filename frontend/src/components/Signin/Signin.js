import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import { authLogin } from './../../store/actions';

class Signin extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        this.props.onAuth(form.formBasicUsername.value, form.formBasicPassword.value);
        this.props.history.push('/');
    };

    render() {
        let errorMessage = null;
        if(this.props.error) {
            errorMessage = (
                <p>{this.props.error}</p>
            );
        }
        return (
          <>
            {errorMessage}
            <Container>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            <p>We will never share your email with anyone else.</p>
                        </Form.Text>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
            Submit
                    </Button>
                </Form>
            </Container>
          </>
        );
    }
}

Signin.propTypes = {
    onAuth: PropTypes.func,
    error: PropTypes.string,
    history: PropTypes.object,
    push: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth : (username, password) => dispatch(authLogin(username, password)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Signin);
