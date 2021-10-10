import React, { Component } from "react";

import FileBase64 from "react-file-base64";

import {
  Button,
  FormData,
  FormGroup,
  Label,
  FormText,
  Form,
  Input,
} from "reactstrap";
import "./upload.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

class Upload extends Component {
  state = {
    confirmation: "",
    isLoading: "",
    files: "",
    Invoice: "",
    Amount: "",
    Date: "",
    Vendor: "",
    Description: "",
  };
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ confirmation: "Uploading..." });
  }
  processing = "Processing Doucments...";

  async getFiles(files) {
    this.setState({
      isLoading: "Extracting data",
      files: files,
    });
  }
  render() {
    const processing = "processing document...";
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <FormGroup on onSubmit={this.handleSubmit}>
            <h3 className="text-danger">{processing}</h3>
            <h6>Upload Invoice</h6>
            <FormText color="muted">PNG,JPG</FormText>
          </FormGroup>

          <div className="form-group files color">
            <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
          </div>

          <FormGroup>
            <Label>
              <h6>Invoice</h6>{" "}
            </Label>
            <Input
              type="text"
              name="invoice"
              id="invoice"
              required
              value={this.state.Invoice}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>
              <h6>Amount ($)</h6>{" "}
            </Label>
            <Input
              type="text"
              name="Amount"
              id="Amount"
              required
              value={this.state.Amount}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>
              <h6>Date of Invoice ($)</h6>{" "}
            </Label>
            <Input
              type="text"
              name="Date"
              id="Date"
              required
              value={this.state.Date}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>
              <h6>Vendor</h6>{" "}
            </Label>
            <Input
              type="text"
              name="Vendor"
              id="Vendor"
              required
              value={this.state.Vendor}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>
              <h6>Description</h6>{" "}
            </Label>
            <Input
              type="text"
              name="Description"
              id="Description"
              required
              value={this.state.Description}
            ></Input>
          </FormGroup>

          <Button className="btn btn-lg btn-block btn-success">Submit</Button>
        </div>
      </div>
    );
  }
}

export default Upload;
