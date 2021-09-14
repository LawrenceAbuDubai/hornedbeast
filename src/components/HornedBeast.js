import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addHeart: 0,
    }
  }
  buttonClicked = () => {
  this.setState({addHeart: this.state.addHeart + 1});
  this.props.showModal(this.props.title);
}
  render() {
    
    const image = this.props.img;
    const title = this.props.title;
    const description = this.props.description;

    return (
      <div>
        <Card style={{ width: '18rem' }}
          onClick={this.buttonClicked}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>❤️ = {this.state.addHeart}</Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HornedBeast;