import React from "react";

class SMSApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxlenght: 100,
      charCount: 100
    };
  }

  textCount = event => {
    this.setState({
      charCount: this.state.maxlenght - event.target.value.length
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-warning text-white">
                  <p className="h4">SMS App</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <textarea
                        maxLength={this.state.maxlenght}
                        onChange={this.textCount}
                        rows="4"
                        className="form-control"
                        placeholder="enter your text"
                      />
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  Remaining Characters:{" "}
                  <span className="h5">{this.state.charCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SMSApp;
