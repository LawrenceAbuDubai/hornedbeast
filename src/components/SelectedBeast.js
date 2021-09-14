import React from 'react';

import { Card, Button, Modal } from 'react-bootstrap';



class SelectedBeast extends React.Component {
  render(){
    
    const displayModal = this.props.displayModal;
    const hideModal = this.props.hideModal;
    const image = this.props.selectedBeast.image_url;
    const title = this.props.selectedBeast.title;
    const description = this.props.selectedBeast.description;
    const keyword = this.props.selectedBeast.keyword;

    return (
      <Modal show={displayModal} onHide={this.props.hideModal}>
      <Modal.Dialog>
        <Modal.Header>
          <h2>Lil Horned Beasties</h2>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '26rem'}}>
        <Card.Img src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{keyword}</Card.Text>
              <Button onClick = {hideModal} variant="primary" size="lg" block>C L O S E</Button>
            </Card.Body>
        </Card>
      </Modal.Body>
      </Modal.Dialog>
      </Modal>
    )
  }
}

export default SelectedBeast;