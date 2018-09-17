import React from 'react';
import Link from 'gatsby-link';

const SecondPage = () => (
  <div>
    <h1>Hello from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the first one</Link>
  </div>
);

export default SecondPage;
