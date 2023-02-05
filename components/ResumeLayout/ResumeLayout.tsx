import {
    faBriefcase, faCircle,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import indefinite from 'indefinite';
import React from 'react';
import { getFullName } from '../../helpers/utils';
import Box from '../Design/components/Box/Box';
import Column from '../Design/components/Layout/Column';
import Row from '../Design/components/Layout/Row';
import AboutMe from '../Articles/AboutMe';
import ContactInformation from '../Articles/ContactInformation';
import HobbiesAndInterests from '../Articles/HobbiesAndInterests';
import EducationItem from '../EducationItem/EducationItem';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageHead from '../PageHead';
import ProfessionalItem from '../ProfessionalItem/ProfessionalItem';
import Section from '../Section/Section';
import SectionHeader from '../SectionHeader/SectionHeader';
import AutoGridCell from "../Design/components/AutoGrid/AutoGridCell";
import {visuallyHidden} from "../Design/styles/accessibility.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import colors from "../Design/themes/timbre/colors";

const ResumeLayout = (props) => {
    const {
        education,
        hobbies,
        links,
        personalInformation,
        professional,
    } = props;
    const fullName = getFullName(personalInformation);
    const jobTitle = indefinite(personalInformation.attributes.title);

    return (
        <>
            <PageHead
                description={`Professional resume for ${fullName}, ${jobTitle} living in ${personalInformation.attributes.location}.`}
                personalInformation={personalInformation}
                title={`Resume | ${fullName} | ${personalInformation.attributes.location}`}
            />

            <Header {...props} />
            {links && (
                <div className='flex flex-wrap justify-center dark:bg-black bg-gray-200'>
                    {links.map((link) => (
                        <AutoGridCell key={link.href}>
                            <a
                                className="fa-3x"
                                href={link.href}
                                rel="noopener noreferrer"
                                target="_blank"
                                data-tooltip={link.title}
                            >
                  <span className={visuallyHidden}>
                    {personalInformation.attributes.givenName} on {link.title}
                  </span>
                                <span className="fa-layers fa-fw">
                    <FontAwesomeIcon color={colors.primary} icon={faCircle} />
                    <FontAwesomeIcon
                        aria-hidden
                        color={colors.white}
                        icon={['fab', link.iconName]}
                        transform="shrink-8"
                    />
                  </span>
                            </a>
                        </AutoGridCell>
                    ))}
                </div>
            )}
            <Section color="standard">
                <Row>
                    <Column width={{ xs: 12, lg: 6 }}>
                        <AboutMe personalInformation={personalInformation} />
                    </Column>
                    <Column width={{ xs: 12, lg: 6 }}>
                        <ContactInformation
                            personalInformation={personalInformation}
                        />
                    </Column>
                </Row>

            </Section>

            <Section color="alternate">
                <Box marginBottom={6}>
                    <SectionHeader icon={faBriefcase} text="Professional Experience" />
                </Box>

                {professional.map((experience) => (
                    <ProfessionalItem key={experience.slug} {...experience} />
                ))}
            </Section>

            <Section color="standard">
                <Box marginBottom={6}>
                    <SectionHeader icon={faGraduationCap} text="Education" />
                </Box>

                {education.map((experience) => (
                    <EducationItem key={experience.slug} {...experience} />
                ))}
            </Section>

            <Section color="alternate">
                <HobbiesAndInterests hobbies={hobbies} />
            </Section>

            <Footer personalInformation={personalInformation} />
        </>
    );
};

export default ResumeLayout;
