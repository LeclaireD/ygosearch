import './App.scss';
import React from 'react';
import rawData from './cardinfo.php.json';

function App() {
	var imgs = new Array();
	for(var i = 0; i < 100; i++){
		var currCard = rawData.data[i].id;
		imgs[i] = "./cardImages/"+currCard+".jpg";
	}
	var cards = imgs.map(function(image) {
 		return (<img src={require(""+image+"")} className="card" />);
	});
  return (
    <div className="page">
    	<div className="cardContainer">
        {cards}
        </div>
    </div>
  );
}

export default App;


