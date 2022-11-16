import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { getFullName } from '../../helpers/utils';
import Container from '../Design/components/Container/Container';
import { footerStyle } from './Footer.css';

interface FooterProps {
  personalInformation: CMSPersonalInformation;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { personalInformation } = props;
  const fullName = getFullName(personalInformation);

  return (
    <footer className={footerStyle}>
      <Container>
        <div>
          Copyright ©{new Date().getFullYear()} {fullName}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
