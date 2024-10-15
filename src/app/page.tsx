import './App.scss';
import Image from 'next/image';
import React from 'react';
import rawData from './cardinfo.php.json';


export default function home() {
  const imgs: string[] = [];

  const parsedData = JSON.parse(JSON.stringify(rawData));
	for(let i = 0; i < 400; i++){
    const currCard = parsedData.data[i].id
		imgs[i] = ("/cardImages/"+currCard+".jpg");
	}
	const cards = imgs.map(function(image) {
 		return (<Image alt="" key={image} src={(image)} className="card" />);
	});
  return (
    <div className="page">
    	<div className="cardContainer">
        {cards}
        </div>
    </div>
  );
}