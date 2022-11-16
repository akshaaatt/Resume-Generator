import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePrefersDarkMode from '../../helpers/useDarkMode';
import { buttonStyle } from '../Design/components/Button/Button.css';
import { atoms } from '../Design/sprinkles.css';

const PDFDownloadButton = () => {
  const darkMode = usePrefersDarkMode();

  return (
    <a
      className={buttonStyle({
        color: darkMode ? 'primary' : 'medium',
        size: 'lg',
      })}
      href='/api/pdf'
      target="_blank"
    >
      <FontAwesomeIcon className={atoms({ marginRight: 2 })} icon={faFilePdf} />
      Resume PDF
    </a>
  );
};

export default PDFDownloadButton;
