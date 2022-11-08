import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSEducationalExperience } from '../../cms-integration/markdown/educational';
import { articleStyle } from '../Articles/article.css';
import {atoms, Heading} from "ashton-design-system";

const EducationItem: React.FC<CMSEducationalExperience> = (props) => {
  return (
    <article className={articleStyle}>
      <Heading level={4} text={props.attributes.achievement} />
      <div>
        <FontAwesomeIcon
          className={atoms({ marginRight: 2 })}
          icon={faUniversity}
        />
        {props.attributes.institution}
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </article>
  );
};

export default EducationItem;
