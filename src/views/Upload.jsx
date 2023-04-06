import {Box, Button, Slider} from '@mui/material';
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useState} from 'react';
import {useMedia, useTag} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';
import {appId} from '../utils/variables';

const Upload = (props) => {
  const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(
    'https://placehold.co/600x400?text=Choose-Media'
  );
  const {postMedia} = useMedia();
  const {postTag} = useTag();
  const navigate = useNavigate();

  const initValues = {
    title: '',
    description: '',
  };

  const filterInitValues = {
    brightness: 50,
    contrast: 50,
    saturation: 50,
    sepia: 50,
  };

  const doUpload = async () => {
    try {
      const data = new FormData();
      data.append('title', inputs.title);
      data.append('description', inputs.description);
      data.append('file', file);
      const userToken = localStorage.getItem('userToken');
      const uploadResult = await postMedia(data, userToken);
      const tagResult = await postTag(
        {
          file_id: uploadResult.file_id,
          tag: appId,
        },
        userToken
      );
      console.log('doUpload', tagResult);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFileChange = (event) => {
    event.persist();
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setSelectedImage(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doUpload,
    initValues
  );

  return (
    <Box>
      <img src={selectedImage} alt="preview"></img>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="title"
          value={inputs.title}
        ></input>
        <textarea
          onChange={handleInputChange}
          name="description"
          value={inputs.description}
        ></textarea>
        <input
          onChange={handleFileChange}
          type="file"
          name="file"
          accept="image/*,video/*,audio/*"
        ></input>
        <Button type="submit">Upload</Button>
      </form>

      <Slider
        name="Brightness"
        defaultValue={50}
        min={0}
        max={110}
        step={1}
        valueLabelDisplay="auto"
      />
      <Slider
        name="Contrast"
        defaultValue={50}
        min={0}
        max={110}
        step={1}
        valueLabelDisplay="auto"
      />
      <Slider
        name="Saturation"
        defaultValue={50}
        min={0}
        max={110}
        step={1}
        valueLabelDisplay="auto"
      />
      <Slider
        name="Sepia"
        defaultValue={50}
        min={0}
        max={110}
        step={1}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

Upload.propTypes = {};

export default Upload;
