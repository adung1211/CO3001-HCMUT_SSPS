import React from "react";

class YourComponent extends React.Component {
  // Function to clear sessionStorage
  clearSessionStorage = () => {
    sessionStorage.clear();
    localStorage.clear();
  };

  render() {
    return (
      <div>
        <p>Your component content here</p>
        <button onClick={this.clearSessionStorage}>Clear sessionStorage</button>
      </div>
    );
  }
}

export default YourComponent;
