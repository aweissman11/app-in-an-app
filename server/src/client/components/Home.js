import React from 'react';

export default function Home() {
  return (
    <div id="jahskdf">
      <div>I'm the home component</div>
      <button className="btn" onClick={() => console.log('Hello there!!')}>
        Press me!
      </button>
    </div>
  );
}
