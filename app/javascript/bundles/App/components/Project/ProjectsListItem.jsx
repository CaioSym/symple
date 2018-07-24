import PropTypes from 'prop-types';
import React from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import './ProjectsListItem.css'

class ProjectsListItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
  };

  render() {
    return (

      <Card className='ProjectsListItem__Card'>
        <CardBody>
          <CardTitle className='ProjectsListItem__CardTitle'>{this.props.title}</CardTitle>
          <CardText className='ProjectsListItem__CardText'>{this.props.description}</CardText>
          <Button color='primary' 
                  className='ProjectsListItem__Button' 
                  onClick={this.props.onView.bind(this, this.props.id)}>View</Button>
          <Button color='info'
                  className='ProjectsListItem__Button' 
                  onClick={this.props.onEdit.bind(this, this.props.id)}>Edit</Button>
          <Button color='danger'
                  className='ProjectsListItem__Button' 
                  onClick={this.props.onDelete.bind(this, this.props.id)}>Delete</Button>
        </CardBody>
      </Card>
    );
  }
}

export default ProjectsListItem