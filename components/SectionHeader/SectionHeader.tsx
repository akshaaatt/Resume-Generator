import { faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePrefersDarkMode from '../../helpers/useDarkMode';
import { composeWithAtoms } from 'ashton-design-system';
import {colors, Heading} from "ashton-design-system";

interface SectionHeaderProps {
  icon: IconDefinition;
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { icon, text } = props;
  const darkMode = usePrefersDarkMode();

  const iconClasses = composeWithAtoms({ marginRight: 2 }, 'fa-layers fa-fw');

  return (
    <Heading level={3}>
      <span className={iconClasses}>
        <FontAwesomeIcon
          color={darkMode ? colors.white : colors.dark}
          icon={faCircle}
        />
        <FontAwesomeIcon
          color={darkMode ? colors.dark : colors.white}
          icon={icon}
          transform="shrink-7"
        />
      </span>
      {text}
    </Heading>
  );
};

export default SectionHeader;
