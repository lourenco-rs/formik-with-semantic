import React from 'react';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';

export default class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Login
          </Header>
          <Segment>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Form.Input fluid icon="user" iconPosition="left" placeholder="Email address" />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button type="submit" color="blue" fluid size="large">
                Login
              </Button>
            </Form>
          </Segment>
          <Message>
            Not registered yet? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
