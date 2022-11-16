import React from 'react';
import getCMSIntegration from '../cms-integration/getCMSIntegration';
import ResumeLayout from '../components/ResumeLayout/ResumeLayout';

export const getStaticProps = async () => {
  const {
    education,
    hobbies,
    links,
    personalInformation,
    professional,
    skills,
  } = await getCMSIntegration('markdown');

  return {
    props: {
      education,
      hobbies,
      links,
      personalInformation,
      professional,
      skills,
    },
  };
};

const ResumePage = (props) => {
  return <ResumeLayout {...props} />;
};

export default ResumePage;
