import React from 'react';
import img from '../static/ele2.jpg'
var Home=React.createClass({
	render(){
		return(
			<div className="pic">
			
			<img src={img}/>
			</div>
		)
	}
})
export default Home
