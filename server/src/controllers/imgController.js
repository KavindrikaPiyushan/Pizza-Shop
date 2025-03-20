const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dvt5ub01q',
    api_key: '892265382541189',
    api_secret: 'mMqYtTEHETnpWePviobrjKK0bkA',
});

const getImages = async (req, res) => {
    const folderName = decodeURIComponent(req.query.folder); // Decodes the URL-encoded folder path
    console.log('Folder Path:', folderName);
  
    // Fetch images from Cloudinary using the folder path
    try {
      const result = await cloudinary.api.resources({
        type: 'upload',
        prefix: `${folderName}/`, // Use the decoded folder path here
      });
  
      const images = result.resources.map((img) => img.url);
      res.json(images); // Send the image URLs back to the client
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Failed to fetch images' });
    }
  };

module.exports = { getImages };
