import React, {useState, useEffect} from 'react';
import './App.scss';
import Filter from './components/Filter/Filter';
import JobListings from './components/JobListings/JobListings';

function App() {
  const [jobs, setJobs] = useState([]);
  const [attributes, setAttributes] = useState([]);

  const getData = async () => {
    const response = await fetch('https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/data.json');
    const data = await response.json();
    setJobs(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleFilterClick = (e) => {
    const attribute = e.target.innerText;
    setAttributes(attributes => Array.from(new Set([...attributes, attribute])));
  }

  const removeFilter = (e) => {
    const newAttributes = attributes.filter(attribute => attribute !== e.target.dataset.attribute);
    setAttributes(newAttributes);
  }

  const clearFilter = () => {
    setAttributes([]);
  }

  return (
    <div className="App">
      <header>
        <h1 className="hidden">Job Listings</h1>
      </header>
      <main>
        {attributes.length === 0 ? null : <Filter attributes={attributes} removeFilter={removeFilter} clear={clearFilter} />}
        <JobListings jobs={jobs} handleFilterClick={handleFilterClick} attributes={attributes} />
      </main>
    </div>
  );
}

export default App;
