import React from 'react';
import '../App.css';

const Column = ({ children, width, shadow }) => {
  return (
    <div className={`column ${shadow && 'shadow'}`} style={{ width }}>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Column  className="" width="80%" shadow>
        <h3>Column 1</h3>
        <p>Content for column 1 goes here.</p>
      </Column>
      <Column width="20%">
        <h3>Column 2</h3>
        <p>Content for column 2 goes here.</p>
      </Column>
    </div>
  );
};

export default App;