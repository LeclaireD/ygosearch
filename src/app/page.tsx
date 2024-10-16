"use client";
import './App.scss';
import Image from 'next/image';
import React from 'react';
import rawData from './cardinfo.php.json';
import { useState } from "react";

export default function MyComponent() {
  const [query, setQuery] = useState('');
  const parsedData = JSON.parse(JSON.stringify(rawData));
  const imgs: string[] = [];
  for(let i = 0; i < parsedData.data.length; i++){
    const currCard = parsedData.data[i].id
    imgs[i] = ("/cardImages/"+currCard+".jpg");
  }
  //search filter
  const searchFilter = (array: string[]) => {
    console.log(array)
    return array.filter(
      (el) => el.toLowerCase().includes(query)
    )
  }

  const filtered = searchFilter(imgs);
  console.log(filtered)

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setQuery(e.target.value)
  }

  const cards = filtered.map(function(image) {
    return (<Image alt="" key={image} src={(image)} className="card" />);
 });

  return (
    <div className="page">
      <input onChange={handleChange} type='text' placeholder='dark' color='black' />
    	<div className="cardContainer">
        {cards}
        </div>
    </div>
  );
}




