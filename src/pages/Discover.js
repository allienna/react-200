import React, { Component } from 'react';
import { pure } from 'recompose';
import PersonCard from '../components/PersonCard';
import Fab from '../components/Fab';

// state management

const succ = (current, min, max) => (current === max) ? min : current + 1;
const pred = (current, min, max) => (current === min) ? max : current - 1;

const showNext = ({ current }, { people }) => ({
  current: succ(current, 0, people.length - 1)
});

const showPrev = ({ current }, { people }) => ({
  current: pred(current, 0, people.length - 1)
});

const play = () => ({
  playing: true
});

const pause = () => ({
  playing: false
});

// subcomponents

const Cards = ({ person }) => (
  <div className="card-container">
    <PersonCard {...person} />
  </div>  
);

const Fabs = ({ playing, next, prev, play, pause }) => (
  <div className="control-container">
    <Fab kind="skip_previous" onClick={prev} />
    { playing
    ? <Fab kind="pause" large onClick={pause} />
    : <Fab kind="play_arrow" large onClick={play} />
    }
    <Fab kind="skip_next" onClick={next} />
  </div>
);
const PureFabs = pure(Fabs);

// container

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      playing: false
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  showNextPerson = () => {
    this.setState(showNext);
  };
  
  showPreviousPerson = () => {
    this.setState(showPrev);
  };

  play = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.showNextPerson, 2000);
    this.setState(showNext);
    this.setState(play);
  };

  pause = () => {
    clearInterval(this.intervalId);
    this.setState(pause);
  };
  
  render() {
    const { people } = this.props;
    const { current, playing } = this.state;
    return (
      <div className="Discover">
        <Cards person={people[current]} />
        <PureFabs
          playing={playing}
          next={this.showNextPerson}
          prev={this.showPreviousPerson}
          play={this.play}
          pause={this.pause}
        />
      </div>
    );
  }
}

export default Discover;