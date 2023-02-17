import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  // arrow function captures this context where it was written, e.g. Carousel class in this case
  // regular function capture sthe context of where it was invoked
  handleIndexClick = (e) => {
    this.setState({ active: +e.target.dataset.index });
    // target.dataset gets all values from DOM element attributes starting with "data-"
    // all these attributes will return a string because everything in a DOM is a string
  };

  render() {
    // throw new Error("lol error");  // -> for testing error boundary
    //class components & hooks dont mix
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
