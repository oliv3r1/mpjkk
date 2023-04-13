import {ImageList} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import {useWindowSize} from '../hooks/WindowHooks';
import MediaRow from './MediaRow';
import propTypes from 'prop-types';

const MediaTable = ({myFilesOnly = false}) => {
  const {mediaArray} = useMedia(myFilesOnly);
  const windowSize = useWindowSize();

  return (
    <ImageList cols={windowSize.width > 768 ? 3 : 2} gap={8}>
      {mediaArray.map((item, index) => {
        return <MediaRow key={index} file={item} />;
      })}
    </ImageList>
  );
};

MediaTable.propTypes = {
  myFilesOnly: propTypes.bool,
};

export default MediaTable;
