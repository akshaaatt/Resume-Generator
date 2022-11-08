import React from 'react';
import { getFullName } from '../../helpers/utils';
import { ResumePageProps } from '../../pages';
import CVPDFDownloadButton from '../PDF/CVPDFDownloadButton';
import { headerStyle } from './Header.css';
import ResumePDFDownloadButton from "../PDF/ResumePDFDownloadButton";
import Image from "next/image";
import myImage from '../../public/pdf/myImage.jpg'
import {Column, Container, Heading, Row} from "ashton-design-system";

const Header: React.FC<ResumePageProps> = (props) => {
  const { personalInformation, secret } = props;

  return (
    <header className={headerStyle}>
      <Container atoms={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Row verticalAlign="center">
          <Column
              atoms={{ paddingTop: { xs: 4, md: 0 } }}
              width={{ xs: 12, sm: 12, md: 'auto' }}
          >
            <Image src={myImage} width="128" height="128" />
          </Column>
          <Column>
            <Heading
              atoms={{ color: 'white' }}
              level={1}
              text={getFullName(personalInformation)}
            />
            <Heading
              atoms={{ color: 'white' }}
              level={2}
              text={personalInformation.attributes.title}
            />
          </Column>
          <Column
            atoms={{ paddingTop: { xs: 4, md: 0 } }}
            width={{ xs: 12, sm: 12, md: 'auto' }}
          >
            <ResumePDFDownloadButton secret={secret} />
          </Column>
          <Column
              atoms={{ paddingTop: { xs: 4, md: 0 } }}
              width={{ xs: 12, sm: 12, md: 'auto' }}
          >
            <CVPDFDownloadButton secret={secret} />
          </Column>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
