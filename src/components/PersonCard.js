import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const PersonCard = ({
  id,
  firstname,
  lastname,
  photo,
  entity,
  email,
  phone,
  manager,
  managerId,
  onEdit
}) => {
  console.info(`render ${firstname}`);
  return (
    <Card actions={ onEdit && [
      <a href="#" onClick={onEdit} key="edit">edit</a>
    ]}>
      <Card.Avatar photoUrl={photo} altText={`photo of ${firstname}`} />
      <Card.Title
        mainTitle={<Link to={`/person/${id}`}>{firstname} {lastname}</Link>}
        subTitle={entity}
      />
      <Card.Info icon="email">
        <a href={`mailto:${email}`}>{email}</a>
      </Card.Info>
      <Card.Info icon="phone">
        <a href={`tel:${phone}`}>{phone}</a>
      </Card.Info>
      { manager && managerId && (
        <Card.Info icon="supervisor_account" desc="manager">
          <Link to={`/person/${managerId}`}>{manager}</Link>
        </Card.Info>
      )}
    </Card>  
  );
};

PersonCard.propTypes = {
  id: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  entity: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  manager: PropTypes.string,
  managerId: PropTypes.string,
  onEdit: PropTypes.func
}

export default PersonCard;


// a very specific helper function

function arePersonCardPropsEqual(currentProps, nextProps) {
  return (
    nextProps.id === currentProps.id &&
    nextProps.firstname === currentProps.firstname &&
    nextProps.lastname === currentProps.lastname &&
    nextProps.photo === currentProps.photo &&
    nextProps.entity === currentProps.entity &&
    nextProps.email === currentProps.email &&
    nextProps.phone === currentProps.phone &&
    nextProps.manager === currentProps.manager &&
    nextProps.managerId === currentProps.managerId &&
    nextProps.onEdit === currentProps.onEdit
  );
}