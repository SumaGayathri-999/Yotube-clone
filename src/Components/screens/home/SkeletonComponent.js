import React from 'react';
import './skeleton.scss';

function SkeletonComponent({type}) {
    const classes = `skeleton ${type}`;
  return (
    <div className = {classes}></div>
  )
}

export default SkeletonComponent