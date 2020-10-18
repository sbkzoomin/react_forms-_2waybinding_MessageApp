import React from "react";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "Bharat",
      email: "",
      password: "",
      designation: "",
      terms: false
    };
  }

  updateInput = event => {
    if (event.target.type === "checkbox") {
      this.setState({
        [event.target.name]: event.target.checked
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  submitForm = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <div className="card bg-light">
                <div className="card-header bg-danger text-white">
                  <p className="h4">Register Here</p>
                </div>
                <div className="card-body">
                  <form onSubmit={this.submitForm}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.updateInput}
                        className="form-control"
                        placeholder="username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.updateInput}
                        className="form-control"
                        placeholder="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.updateInput}
                        className="form-control"
                        placeholder="password"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="designation"
                        value={this.state.designation}
                        onChange={this.updateInput}
                      >
                        <option value="Software Engineer">
                          Software Engineer
                        </option>
                        <option value="Project Lead">Project Lead</option>
                        <option value="Team Lead">Team Lead</option>
                      </select>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={this.updateInput}
                        checked={this.state.terms}
                        name="terms"
                        id="defaultCheck1"
                      />
                      <label className="form-check-label" for="defaultCheck1">
                        Accecpt terms and Conditions
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-danger btn-sm"
                        value="register"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
