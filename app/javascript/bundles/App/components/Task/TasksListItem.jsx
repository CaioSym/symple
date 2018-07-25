import PropTypes from 'prop-types';
import React from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import './TasksListItem.css'

class TasksListItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
  };

  render() {
    return (

      <Card className='TasksListItem__Card'>
        <CardBody>
          <CardTitle className='TasksListItem__CardTitle'>{this.props.title}</CardTitle>
          <CardText className='TasksListItem__CardText'>{this.props.description}</CardText>
          <div className='TasksListItem__CardBottom'>
            <div className='TasksListItem__CardActions'>
              <Button className='AppButton AppButton--Primary TasksListItem__Button' 
                      onClick={this.props.onView.bind(this, this.props.id)}>View</Button>
              <Button className='AppButton AppButton--Secondary TasksListItem__Button' 
                      onClick={this.props.onEdit.bind(this, this.props.id)}>Edit</Button>
              <Button className='AppButton AppButton--Danger TasksListItem__Button' 
                      onClick={this.props.onDelete.bind(this, this.props.id)}>Delete</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default TasksListItem