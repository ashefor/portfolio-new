import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xdokvown"
                method="POST"
            >
                {status === "SUCCESS" ? <p style={{ color: 'green' }}>Thanks for reaching out. I'll get back to you soon!</p> : <div>
                    <input className="ant-input ant-input-lg"
                        name="email"
                        placeholder="Your email"
                        type="email"
                        style={{ marginBottom: 24 }} />
                    <textarea className="ant-input"
                        style={{
                            height: 94,
                            minHeight: 94,
                            maxHeight: 115
                        }}
                        placeholder="Your message"
                        name="message" />
                    <button className="ant-btn uppercase-text margin-6-top custom-btn ant-btn-lg">Submit</button>
                </div>}
                {status === "ERROR" && <p style={{ color: 'red' }}>Ooops! There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}