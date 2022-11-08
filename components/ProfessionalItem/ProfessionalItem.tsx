import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSProfessionalExperience } from '../../cms-integration/markdown/professional';
import { articleStyle } from '../Articles/article.css';
import {atoms, Heading} from "ashton-design-system";

const ProfessionalItem: React.FC<CMSProfessionalExperience> = (props) => {
  return (
    <article className={articleStyle}>
      <Heading level={4}>
        <span
          className={atoms({
            backgroundColor: { darkMode: 'white', lightMode: 'dark' },
            borderRadius: 'rounded',
            color: { darkMode: 'dark', lightMode: 'white' },
            paddingX: 2,
          })}
        >
          {props.attributes.title}
        </span>{' '}
        at {props.attributes.organization}
      </Heading>
      <div>
        <FontAwesomeIcon
          className={atoms({ marginRight: 2 })}
          icon={faCalendar}
        />
        {props.attributes.startDate}–
        {!props.attributes.endDate ? 'Current' : props.attributes.endDate}
      </div>
      <div
        className={atoms({ marginTop: 4 })}
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </article>
  );
};

export default ProfessionalItem;
