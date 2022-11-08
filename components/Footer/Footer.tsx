import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSLink } from '../../cms-integration/markdown/links';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { getFullName } from '../../helpers/utils';
import { footerLinkStyle, footerStyle } from './Footer.css';
import {atoms, AutoGrid, AutoGridCell, colors, Container, visuallyHidden} from "ashton-design-system";

interface FooterProps {
  personalInformation: CMSPersonalInformation;
  links?: CMSLink[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const { personalInformation, links } = props;
  const fullName = getFullName(personalInformation);

  return (
    <footer className={footerStyle}>
      <Container>
        {links && (
          <AutoGrid guttersX={2} guttersY={2} horizontalAlign="center">
            {links.map((link) => (
              <AutoGridCell key={link.href}>
                <a
                  className="fa-3x"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className={visuallyHidden}>
                    {personalInformation.attributes.givenName} on {link.title}
                  </span>
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon color={colors.primary} icon={faCircle} />
                    <FontAwesomeIcon
                      aria-hidden
                      color={colors.white}
                      icon={['fab', link.iconName]}
                      transform="shrink-8"
                    />
                  </span>
                </a>
              </AutoGridCell>
            ))}
          </AutoGrid>
        )}

        <div className={atoms({ marginTop: 4 })}>
          Copyright ©{new Date().getFullYear()} {fullName}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
