import React, { useState } from 'react';
import UploadForm from '../components/UploadForm.js';
import ImageGrid from '../components/ImageGrid.js';
import Modal from '../components/Modal.js';

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Gallery;
