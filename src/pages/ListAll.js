import React from 'react';
import { connect } from 'react-redux';

import PersonCard from '../components/PersonCard';
import SearchInput from '../components/SearchInput';
import { searchChanged } from '../state/actions';
import { getAllPersonIds, getPersonById } from '../state/store';

// utils

const filterPerson = search => person => {
  if (!search) {
    return true;
  } else {
    const re = new RegExp(search, 'i');
    return re.test(person.firstname) || re.test(person.lastname);
  }
};

// connect

const mapStateToProps = state => ({
  people: getAllPersonIds(state).map(id => getPersonById(state, id)),
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  searchChanged: event => void dispatch(searchChanged(event.target.value))
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

// Component

const ListAll = ({people, search, searchChanged}) => (
  <div className="ListAll">
    <div className="card-container">
      { people
        .filter(filterPerson(search))
        .map(person => 
          <PersonCard id={person.id} key={person.id} />
        )
      }
    </div>
    <div className="control-container">
      <SearchInput id="search" label="search by name"
        value={search}
        onChange={searchChanged}
      />
    </div>
  </div>
);

export default enhance(ListAll);