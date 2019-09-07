import React, { useState } from 'react';
import './App.css';

function App() {
  // Making hooks
  const [fruits, setFruit] = useState(['Apple','Banana', 'Orange']);
  const [count, setCount] = useState(0);
  const [errorDisplay, setErrorDisplay] = useState(<div></div>);
  const [update, setUpdate] = useState(0)
  const [noFruits, setNoFruits] = useState(<p></p>)

  const allFruits = {
    // A
    'Açaí': true, 'Akee': true, 'Apple': true, 'Apricot': true, 'Avocado': true,
    // B
    'Banana': true, 'Bell pepper': true, 'Bilberry': true, 'Black sapote': true, 'Blackberry': true,
    'Blackcurrant': true, 'Blood orange': true, 'Blueberry': true, 'Boysenberry': true, "Buddha's hand": true,
    // C
    'Cantaloupe': true, 'Cherry': true, 'Chico fruit': true, 'Chili pepper': true, 'Clementine': true, 'Cloudberry': true, 'Coconut': true,
    'Corn': true, 'Crab apples': true, 'Cranberry': true, 'Cucumber': true, 'Currant': true, 'Custard Apple': true,
    // D
    'Damson': true, 'Date': true, 'Dragonfruit': true, 'Durian': true,
    // E
    'Eggplant': true, 'Elderberry': true,
    // F
    'Feijoa': true, 'Fig': true, 'Goji berry': true, 'Gooseberry': true, 'Grape': true, 'Grapefruit': true, 'Guava': true,
    // H
    'Honeyberry': true, 'Honeydew': true, 'Huckleberry': true,
    // J
    'Jabuticaba': true, 'Jackfruit': true, 'Jambul': true, 'Japanese plum': true, 'Jostaberry': true, 'Jujube': true, 'Juniper berry': true,
    // K
    'Kiwano': true, 'Kiwi': true, 'Kumquat': true,
    // L
    'Lemon': true, 'Lime': true, 'Longan': true, 'Loquat': true, 'Lychee': true,
    // M
    'Mandarine': true, 'Mango': true, 'Mangosteen': true, 'Marionberry': true, 'Melon': true, 'Miracle fruit': true, 'Mulberry': true,
    // N
    'Nance': true, 'Nectarine': true,
    // O
    'Olive': true, 'Orange': true,
    // P
    'Papaya': true, 'Passionfruit': true, 'Pea': true, 'Peach': true, 'Pear': true, 'Persimmon': true, 'Pineapple': true,
    'Pineberry': true, 'Plantain': true, 'Plum': true, 'Plumcot': true, 'Pomegranate': true, 'Pomelo': true, 'Prune': true,
    'Pumpkin': true, 'Purple mangosteen': true,
    // Q
    'Quince': true,
    // R
    'Raisin': true, 'Rambutan': true, 'Raspberry': true, 'Redcurrant': true,
    // S
    'Salak': true, 'Salal berry': true, 'Salmonberry': true, 'Satsuma': true, 'Soursop': true, 'Squash': true,
    'Star apple': true, 'Star fruit': true, 'Strawberry': true, 'Surinam cherry': true,
    //T
    'Tamarillo': true, 'Tamarind': true, 'Tangerine': true, 'Tomato': true,
    // U
    'Ugli fruit': true,
    // W
    'Watermelon': true, 'White currant': true, 'White sapote': true,
    // Y
    'Yuzu': true,
    // Z
    'Zucchini': true
  }

  // Title of webpage
  document.title = 'Fruit List'

  // Function to add a fruit
  const addToFruits = (fruitToAdd) => {
    // Check if new fruit contains only letters, spaces, or apostrophes
    if (/[^a-z' ]/i.test(fruitToAdd))
      setErrorDisplay(<p style={{color: 'red'}}>New fruit must be only letters!</p>)

    // Check if new fruit is a duplicate
    else if (fruits.includes(fruitToAdd.charAt(0).toUpperCase() + fruitToAdd.toLowerCase().substring(1)))
      setErrorDisplay(<p style={{color: 'red'}}>That is already a fruit!</p>)
   
    // Check if string is empty
    else if (!fruitToAdd)
      setErrorDisplay(<p style={{color: 'red'}}>That name is empty!</p>)
 
    // Check if string is a real fruit
    else if (!allFruits[fruitToAdd.charAt(0).toUpperCase() + fruitToAdd.toLowerCase().substring(1)])
      setErrorDisplay(<p style={{color: 'red'}}>That's not a real fruit!</p>)

    // Add new fruit if it meet all the conditions
    else {
      setNoFruits(<p></p>)
      setErrorDisplay(<div></div>)
      setFruit([...fruits, fruitToAdd.charAt(0).toUpperCase() + fruitToAdd.substring(1).toLowerCase()])
      document.getElementById('fruitToAdd').value = ''
    }
  }

  // Changing to next fruit
  const nextFruit = () => {
    setErrorDisplay(<div></div>)
    setCount(count + 1)
  }

  // Styles for the next fruit button
  const nextFruitButtonStyle = {       
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderRadius: 4,
    paddingLeft: 7,
    width: 80,
    height: 20
  }

  // Disable next fruit button if at the end of the list
  if (fruits.length === 0 || count === fruits.length - 1) {
    var nextFruitButton =
    <button
      disabled
      style={nextFruitButtonStyle}
      onClick={() => nextFruit()}>
      Next fruit
    </button>
  }
  else {
    nextFruitButton =
    <button
      style={nextFruitButtonStyle}
      onClick={() => nextFruit()}>
      Next fruit
   </button>
  }

  // Changing to previous fruit
  const previousFruit = () => {
    setErrorDisplay(<div></div>)
    setCount(count - 1)
  }

  // Styles for the previous fruit button
  const previousFruitButtonStyle = {       
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderRadius: 4,
    paddingLeft: 7,
    width: 95,
    height: 20,
    marginRight: 10
  }

  // Disable previous fruit button if at the beginning of the list
  if (fruits.length === 0 || count === 0) {
    var previousFruitButton =
    <button
      disabled
      style={previousFruitButtonStyle}
      onClick={() => previousFruit()}>
      Previous fruit
    </button>
  }
  else {
    previousFruitButton =
    <button
      style={previousFruitButtonStyle}
      onClick={() => previousFruit()}>
      Previous fruit
    </button>
  }

  // Initialize the list array
  var fruitsList = []

  // Function to refresh fruit list after fruit is removed or added
  const refreshFruitList = () => {
    for (var i = 0; i < fruits.length; i++) {
      if (i !== count)
        var fruitList =
          <p
          style={{    
            minWidth: 100,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderStyle: 'solid',
            borderRadius: 4,
            textAlign: 'center',
            paddingTop: 5,
            paddingBottom: 5,
            marginRight: 10,
            display: 'inline-block'}}>
            {fruits[i]}
          </p>
      else
        fruitList =
          <p
          style={{    
            minWidth: 100,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderStyle: 'solid',
            borderRadius: 4,
            textAlign: 'center',
            paddingTop: 5,
            paddingBottom: 5,
            marginRight: 10,
            display: 'inline-block',
            backgroundColor:'lightblue'}}>
            {fruits[i]}
          </p>

      fruitsList = [...fruitsList, fruitList]
    }
  }

  // Function to remove a fruit
  const removeFruit = () => {
    fruits.splice(count, 1)
    if (fruits.length === 0)
      setNoFruits(<h4>There are no fruits in the list right now</h4>)
    if (count === 0)
      setUpdate(update + 1)
    else
      setCount(count - 1)
  }

  // Get all the fruits in the list
  refreshFruitList()

  // Returning all the elements
  return (
    <div className='mainDiv'>
      {/* Title of the page */}
      <h1> The Fruit List </h1>
      {/* Say if there are no fruits */}
      {noFruits}
      {/* The list of fruits */}
      {fruitsList}
      {/* Previous Fruits button */}
      <br></br>
      {previousFruitButton}
      {/* Next Fruit button */}
      {nextFruitButton}
      <p> Input a new fruit </p>
      {/* Input for new fruit */}
      <input
        style={{
        height: 19,
        width: 120,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderStyle: 'solid',
        borderRadius: 4,
        paddingLeft: 7,
      }}
        id='fruitToAdd'
        placeholder= 'New Fruit'
      />
      {/* Button to remove the currently selected fruit */}
      <p></p>
      <button
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderStyle: 'solid',
          borderRadius: 4,
          paddingLeft: 7,
          backgroundColor: 'salmon',
          width: 100,
          height: 20,
          marginRight: 5
        }}
        onClick={() => removeFruit()}>
        Remove Fruit
      </button>
      {/* Button to add fruit */}
      <button
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderStyle: 'solid',
          borderRadius: 4,
          paddingLeft: 7,
          backgroundColor: 'lightgreen',
          width: 80,
          height: 20,
        }}
        onClick={() => addToFruits(document.getElementById('fruitToAdd').value)}>
        Add Fruit
      </button>
      {/* Displaying any errors */}
      {errorDisplay}
    </div>
  );
}

export default App;
