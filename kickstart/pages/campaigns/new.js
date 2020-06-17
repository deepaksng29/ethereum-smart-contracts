import React, { Component } from "react";
import factory from "../../ethereum/factory";
import { Form, Button, Checkbox, Input, Message } from "semantic-ui-react";
import Layout from "../../components/layout";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
    state = {
        minimumContribution: "",
        errorMessage: "",
        loading: false
    }

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: "" });
        try {
            
            const accounts = await web3.eth.getAccounts(); 
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });
            
            this.setState({ loading: false });
        } catch (err) {
            this.setState({ errorMessage: err.message, loading: false });
        }
    }

    render() {
        return (
            <Layout>
                <h3>Create a campaign</h3>
                <Form onSubmit = { this.onSubmit } error = { !!this.state.errorMessage }>
                    <Form.Field>
                        <label>Minimum contribution</label>
                        <Input placeholder = "0" label = "wei" labelPosition = "right" value = { this.state.minimumContribution } onChange = { event => this.setState({ minimumContribution: event.target.value }) } />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label = "I agree to the Terms and Conditions" />
                    </Form.Field>
                    <Message
                        error
                        header = "Error!"
                        content = { this.state.errorMessage }
                        icon = "attention"
                    />
                    <Button loading = {this.state.loading } type = "Submit" primary>Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;