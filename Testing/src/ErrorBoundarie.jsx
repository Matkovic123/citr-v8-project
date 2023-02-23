import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // typically you'd log this to e.g. TrackJS or NewRelic
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        // this is hardcoded but could be added in actual place where it is used, e.g. Details.jsx and then every wrapped component could have its own DOM error element
        <h2>
          There was an error with this listing{" "}
          <Link to="/">Click here to go back to the home page.</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
