import React, {Component} from 'react';


export const Loading = ({isFetching = false}) => (
	<div id="block-ui" className="Loader" style={{position: 'absolute', top: 0, height: '100%', width: '100%', display: `${isFetching ? 'block' : 'none'}`}}>
    <div className="Loader__content" style={{opacity: 1, height: '100%'}} />
    <div className="Loader__background" style={{display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.498039)'}}>
      <div className="Loader__foreground" style={{display: 'table', width: '100%', height: '100%', textAlign: 'center', zIndex: 20, color: 'white'}}>
        <div className="Loader__message" style={{display: 'table-cell', verticalAlign: 'middle'}}>
          Vui lòng chờ ...
        </div>
      </div>
    </div>
  </div>
)