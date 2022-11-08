import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { CMSPrivateInformation } from '../../cms-integration/markdown/private';
import SectionHeader from '../SectionHeader/SectionHeader';
import {Box, Column, NavListItem, Row, UnorderedList} from "ashton-design-system";

interface ContactInformationProps {
  personalInformation: CMSPersonalInformation;
  privateInformation?: CMSPrivateInformation[];
}

const ContactInformation: React.FC<ContactInformationProps> = (props) => {
  const { personalInformation, privateInformation } = props;

  return (
    <Box as="article" marginBottom={{ xs: 6, lg: 0 }}>
      <SectionHeader icon={faIdCard} text="Contact Information" />
      <UnorderedList direction="vertical">
        <NavListItem>
          <Row>
            <Column width={{ xs: 'auto' }}>
              <strong>Location:</strong>
            </Column>
            <Column>{personalInformation.attributes.location}</Column>
          </Row>
          <Row>
            <Column width={{ xs: 'auto' }}>
              <strong>Email:</strong>
            </Column>
            <Column>{personalInformation.attributes.email}</Column>
          </Row>
          <Row>
            <Column width={{ xs: 'auto' }}>
              <strong>Contact number:</strong>
            </Column>
            <Column>{personalInformation.attributes.contactNumber}</Column>
          </Row>
          <Row>
            <Column width={{ xs: 'auto' }}>
              <strong>Website:</strong>
            </Column>
            <Column>
              <a
                  href={personalInformation.attributes.website}
                  rel="noreferrer"
                  target='_blank'>
                {personalInformation.attributes.website}
              </a>
            </Column>
          </Row>
        </NavListItem>
        {privateInformation &&
          privateInformation.map((privateField) => (
            <NavListItem key={privateField.attributes.label}>
              <Row>
                <Column width={{ xs: 'auto' }}>
                  <strong>{privateField.attributes.label}:</strong>
                </Column>
                <Column>
                  <div
                    dangerouslySetInnerHTML={{ __html: privateField.html }}
                  />
                </Column>
              </Row>
            </NavListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};

export default ContactInformation;
