import React, { Component } from "react";
import { Form, Input, Message, Checkbox, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
    state = {
        value: "",
        loading: false,
        errorMessage: ""
    }

    onSubmit = async (event) => {
        console.log("hello");
        event.preventDefault();

        this.setState({ loading: true, errorMessage: "" });
        const campaign = Campaign(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, "ether")
            });

        Router.replaceRoute(`/campaigns/${ this.props.address }`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false, value: "" })
    }

    render() {
        return (
            <Form onSubmit = { this.onSubmit } error = { !!this.state.errorMessage } >
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input 
                        value = { this.state.value }
                        label = "eth"
                        labelPosition = "right"
                        onChange = { event => this.setState({ value: event.target.value }) }
                    />
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
                <Button type = "submit" loading = { this.state.loading } primary>
                    Contribute
                </Button>
            </Form>
        );
    }
}

export default ContributeForm;