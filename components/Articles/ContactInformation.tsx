import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import Box from '../Design/components/Box/Box';
import Column from '../Design/components/Layout/Column';
import Row from '../Design/components/Layout/Row';
import NavListItem from '../Design/components/Nav/NavListItem';
import UnorderedList from '../Design/components/Nav/UnorderedList';
import SectionHeader from '../SectionHeader/SectionHeader';

interface ContactInformationProps {
  personalInformation: CMSPersonalInformation;
}

const ContactInformation: React.FC<ContactInformationProps> = (props) => {
  const { personalInformation } = props;

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
      </UnorderedList>
    </Box>
  );
};

export default ContactInformation;
