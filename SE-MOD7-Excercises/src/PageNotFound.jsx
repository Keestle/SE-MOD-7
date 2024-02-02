import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  const goBack = () => {
    window.history.back(); // Using window.history to navigate one page back
  };

  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>What were you looking for? Maybe going back <Link to="/">home</Link> will help you find it.</p>

      {/* Back button using react-router-dom Link */}
      <button onClick={goBack}>Go Back</button>

      {/* Standard <a href> link */}
      <p>Or you can try the <a href="/">home</a> link using a standard anchor tag.</p>
    </div>
  );
}

export default PageNotFound;