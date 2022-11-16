import { CMSPersonalInformation } from '../cms-integration/markdown/personal';

export const getFullName = (
  personalInformation: CMSPersonalInformation,
): string => {
  return `${personalInformation.attributes.givenName} ${personalInformation.attributes.familyName}`;
};
