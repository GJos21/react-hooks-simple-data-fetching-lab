import React, { useState, useEffect } from 'react'

function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((json) => {
        setDogImage(json.message);
        setIsLoading(false)
      })
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog"></img>}
    </div>
  )
}

export default App


