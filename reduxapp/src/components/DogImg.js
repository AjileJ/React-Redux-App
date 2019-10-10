import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchDogs} from '../actions';

import DogCard from './DogCard';

const DogInfo = props => {
  useEffect(()=> {
    props.fetchDogs();
  },[]);
  if(props.isFetching) {
    return <h2>Loading Dog Image...</h2>
  }
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      
        <DogCard message={props.dogInfo}/>
      
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dogInfo: state.dogInfo,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {fetchDogs})(DogInfo);