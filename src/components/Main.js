import HornedBeast from './HornedBeast.js';

import React from 'react';
import Card from 'react-bootstrap/Card'


class Main extends React.Component {  
  render() {
    return (
      <div>
        <Card> 
          {this.props.beasts.map((thisLilBeastie, index) => {
            return (
              <div key={index}>
                <HornedBeast
                  showModal = {this.props.showModal}
                  title={thisLilBeastie.title}
                  img={thisLilBeastie.image_url}
                  description={thisLilBeastie.description}
                />
              </div>
            )
          })}
        </Card>
      </div>
    )
  }
}

export default Main;