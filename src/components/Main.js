import HornedBeast from './HornedBeast.js';
import HornCount from './HornCount.js';

import React from 'react';
import Card from 'react-bootstrap/Card'


class Main extends React.Component {  
  render() {
    return (
      <div>
        <HornCount
          presentFancyBeasts={this.props.presentFancyBeasts} 
        />
        <Card> 
          {this.props.beasts.map((thisLilBeastie, index) => {
            return (
              <div key={index}>
                <HornedBeast
                  showModal = {this.props.showModal}
                  title={thisLilBeastie.title}
                  img={thisLilBeastie.image_url}
                  description={thisLilBeastie.description}
                  horns={thisLilBeastie.horns}
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