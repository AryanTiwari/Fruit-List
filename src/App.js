import React, { useState } from 'react';
import './App.css';

function App() {
  // Making hooks
  const [fruits, setFruit] = useState(['Apple','Banana', 'Orange']);
  const [count, setCount] = useState(0);
  const [errorDisplay, setErrorDisplay] = useState(<div></div>);
  const [update, setUpdate] = useState(0)
  const [noFruits, setNoFruits] = useState(<p></p>)

  const allFruits = [
    // A
    "apple", "apricot", "avocado",
    // B
    "banana", "bilberry", "blackberry", "blackcurrant", "blood Orange", "blueberry", "boysenberry",
    // C
    "cantaloupe", "cherimoya", "cherry", "chico fruit", "chili", "clementine", "cloudberry", "coconut", "corn", "cranberry", "cucumber", "Ccurrant", "Custard apple", 
    // D
    "damson", "date", "dragonfruit", "durian", 
    // E
    "eggplant", "elderberry", 
    // F
    "feijoa", "fig", 
    // G
    "goji berry", "gooseberry", "grape", "grapefruit", "guava", 
    // H
    "honeyberry", "honeydew", "huckleberry", 
    // J
    "jabuticaba", "jackfruit", "jambul", "jujube", "juniperberry", 
    // K
    "kiwi", "kumquat", 
    // L
    "lemon", "lime", "longan", "loquat", "lychee", 
    // M
    "mandarine", "mango", "marionberry", "melon", "miracle fruit", "mulberry", 
    // N
    "nance", "nectarine", 
    // O
    "olive", "orange", 
    // P
    "papaya", "passionfruit", "pea", "peach", "pear", "persimmon", "physalis", "pineapple", "plantain", "plum", "plumcot", "pomegranate", "pomelo", "prune", "purple mangosteen", 
    // Q
    "quince", 
    // R
    "raisin", "rambutan", "raspberry", "redcurrant", 
    // S
    "salak", "salal berry", "salmonberry", "satsuma", "solanum quitoense", "soursop", "squash", "star fruit", "strawberry", "sunflower seed", 
    // T
    "tamarillo", "tamarind", "tangerine", "tomato", 
    // U
    "ugli fruit", 
    // W
    "watermelon"
  ]

  // Title of webpage
  document.title = 'Fruit List' 

  // Function to add a fruit
  const addToFruits = (fruitToAdd) => {
    // Check if new fruit contains only letters
    if (/[^a-z ]/i.test(fruitToAdd))
      setErrorDisplay(<p style={{color: 'red'}}>New fruit must be only letters!</p>)

    // Check if new fruit is a duplicate
    else if (fruits.includes(fruitToAdd.charAt(0).toUpperCase() + fruitToAdd.toLowerCase().substring(1)))
      setErrorDisplay(<p style={{color: 'red'}}>That is already a fruit!</p>)
    
    // Check if string is empty
    else if (!fruitToAdd)
      setErrorDisplay(<p style={{color: 'red'}}>That name is empty!</p>)
  
    // Check if string is a real fruit
    else if (!allFruits.includes(fruitToAdd.toLowerCase())) {
      setErrorDisplay(<p style={{color: 'red'}}>That's not a real fruit!</p>)
    }

    // Add new fruit if its not a duplicate or contains only letters and is a real fruit
    else {
      setNoFruits(<p></p>)
      setErrorDisplay(<div></div>)
      setFruit([...fruits, fruitToAdd.charAt(0).toUpperCase() + fruitToAdd.substring(1).toLowerCase()])
      // setFruit(fruits.sort())
      document.getElementById("fruitToAdd").value = ''
    }
  }

  // Changing to previous fruit
  const previousFruit = () => {
    setErrorDisplay(<div></div>)
    setCount(count - 1)
  }

  // Changing to next fruit
  const nextFruit = () => {
    setErrorDisplay(<div></div>)
    setCount(count + 1)
  }

  // Disable next fruit button or not
  if (fruits.length === 0 || count === fruits.length - 1) {
    var nextFruitButton = 
    <button
      disabled
      style={{
        borderWidth: 1,
        borderColor: 'gray', 
        borderStyle: 'solid',
        borderRadius: 4,
        paddingLeft: 7,
        width: 80,
        height: 20
      }} 
      onClick={() => nextFruit()}>
      Next fruit
    </button>
  }
  else {
    nextFruitButton = 
    <button 
      style={{
        borderWidth: 1,
        borderColor: 'gray', 
        borderStyle: 'solid',
        borderRadius: 4,
        paddingLeft: 7,
        width: 80,
        height: 20
      }} 
      onClick={() => nextFruit()}>
      Next fruit
   </button>
  }

  // Disable previous fruit button or not
  if (fruits.length === 0 || count === 0) {
    var previousFruitButton = 
    <button
      disabled
      style={{
        borderWidth: 1,
        borderColor: 'gray', 
        borderStyle: 'solid',
        borderRadius: 4,
        paddingLeft: 7,
        width: 95,
        height: 20,
        marginRight: 10
      }} 
      onClick={() => previousFruit()}>
      Previous fruit
    </button>
  }
  else {
    previousFruitButton =
    <button
      style={{
        borderWidth: 1,
        borderColor: 'gray', 
        borderStyle: 'solid',
        borderRadius: 4,
        paddingLeft: 7,
        width: 95,
        height: 20,
        marginRight: 10
      }} 
      onClick={() => previousFruit()}>
      Previous fruit
    </button>
  }


  // Initialize the list array
  var fruitsList = []

  // Function to refresh fruit list after fruit is removed or added
  const refreshFruitList = () => {
    for (var i = 0; i < fruits.length; i++) {
      if (i !== count) {
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
            display: 'inline-block'
            }}> 
              {fruits[i]}
          </p>
      } else {
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
            backgroundColor: 'lightblue',
            display: 'inline-block'
            }}> 
              {fruits[i]}
          </p>
      }
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
    <div className="mainDiv">
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
        id="fruitToAdd"
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
        onClick={() => addToFruits(document.getElementById("fruitToAdd").value)}>
        Add Fruit
      </button>
      {/* Displaying any errors */}
      {errorDisplay}
    </div>
  );
}

export default App;
