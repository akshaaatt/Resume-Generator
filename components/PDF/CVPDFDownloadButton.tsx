import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePrefersDarkMode from '../../helpers/useDarkMode';
import { buttonStyle } from '../../src/strum-design-system/components/Button/Button.css';
import { atoms } from '../../src/strum-design-system/sprinkles.css';

interface PDFDownloadButtonProps {
  secret?: string;
}

const CVPDFDownloadButton: React.FC<PDFDownloadButtonProps> = (props) => {
  const { secret } = props;
  const darkMode = usePrefersDarkMode();

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      className={buttonStyle({
        color: darkMode ? 'primary' : 'medium',
        size: 'lg',
      })}
      href={secret ? `/api/pdf?secret=${secret}` : '/api/cv_pdf'}
      target="_blank"
    >
      <FontAwesomeIcon className={atoms({ marginRight: 2 })} icon={faFilePdf} />
      Complete CV PDF
    </a>
  );
};

export default CVPDFDownloadButton;
