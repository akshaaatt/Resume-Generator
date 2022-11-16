import React from 'react';
import { getFullName } from '../../helpers/utils';
import Container from '../Design/components/Container/Container';
import Heading from '../Design/components/Heading/Heading';
import Column from '../Design/components/Layout/Column';
import Row from '../Design/components/Layout/Row';
import CVPDFDownloadButton from '../PDF/CVPDFDownloadButton';
import { headerStyle } from './Header.css';
import ResumePDFDownloadButton from "../PDF/ResumePDFDownloadButton";
import Image from "next/image";
import myImage from '../../public/assets/img/myImage.jpg'
import ThemeToggle from "../Utils/ThemeToggle";
import { useTheme } from 'next-themes'

const Header = (props) => {
  const { personalInformation} = props;
  const { theme, setTheme } = useTheme()

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
            <ResumePDFDownloadButton />
          </Column>
          <Column
              atoms={{ paddingTop: { xs: 4, md: 0 } }}
              width={{ xs: 12, sm: 12, md: 'auto' }}
          >
            <CVPDFDownloadButton />
          </Column>
          {/*<Column*/}
          {/*    atoms={{ paddingTop: { xs: 4, md: 0 } }}*/}
          {/*    width={{ xs: 12, sm: 12, md: 'auto' }}*/}
          {/*>*/}
          {/*  <ThemeToggle*/}
          {/*      theme={theme}*/}
          {/*      onClick={(theme) => {*/}
          {/*        setTheme(theme)*/}
          {/*      }}*/}
          {/*  />*/}
          {/*</Column>*/}
        </Row>
      </Container>
    </header>
  );
};

export default Header;
