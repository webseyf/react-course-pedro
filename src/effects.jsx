import { useEffect, useState } from 'react';
import axios from 'axios';

function Effect() {
  const [api, setApi] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  // Fetch a cat fact
  const fetching = async () => {
    try {
      const data = await axios.get('https://catfact.ninja/fact?max_length=30');
      setApi(data.data.fact);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch the age based on name
  const getAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io?name=${name}`);
      setAge(response.data.age);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch a cat fact when component mounts
  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <button onClick={fetching}>Generate cats</button>
      <h1>{api}</h1>

      <span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name please"
        />
        <button onClick={getAge}>Predict my age</button>
        {age && <h2>Predicted Age: {age}</h2>}
      </span>
    </div>
  );
}

export default Effect;
