import React, { PropsWithChildren } from 'react';
import { sectionStyle } from './Section.css';
import {Container} from "ashton-design-system";

interface Section {
  color?: keyof typeof sectionStyle;
}

const Section: React.FC<PropsWithChildren<Section>> = (props) => {
  const { children, color } = props;

  return (
    <section className={sectionStyle[color]}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
