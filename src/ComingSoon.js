import React from 'react';

const ComingSoon = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Coming Soon</h1>
      <p>Hang Tight! We're working hard to bring you the best experience.</p>
      {/* Image from the public folder */}
      <img 
        src="/ComingSoonDogPlug.jpg"  // Path to the image in public folder
        alt="Coming Soon" 
        style={{ width: '300px', marginTop: '20px' }} 
      />
    </div>
  );
};

export default ComingSoon;