import React from 'react';

const ComingSoon = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Coming Soon</h1>
      <p>I'm working hard to bring you the best experience. Stay tuned!</p>
      {/* Image from the public folder */}
      <img 
        src="/199cd3b60d64297ad6608dbf7870fe6b.jpg"  // Path to the image in public folder
        alt="Coming Soon" 
        style={{ width: '300px', marginTop: '20px' }} 
      />
    </div>
  );
};

export default ComingSoon;
