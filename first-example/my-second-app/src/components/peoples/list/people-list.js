import React, { Component } from 'react';
import People from '../people/people';

const PeopleList = (props) => {
    return props.persons.map((value, index) => {
        return <People name={value.name}></People>;
    });
};

export default PeopleList;