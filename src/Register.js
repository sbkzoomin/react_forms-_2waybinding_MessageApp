import React from "react";

class Register extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-danger text-white">
                  <p className="h4">Register Here</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="password"
                      />
                    </div>
                    <div className="form-group">
                      <select className="form-control">
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
                        value=""
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
