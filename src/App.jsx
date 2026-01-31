import { useState } from 'react';
import './App.css';
import DataCollector from './DataCollection/DataCollector';
import DataPreview from './DataPreview/DataPreview';
import {
  validateHeader,
  validateSummary,
  validateExperience,
  validateSkills,
  validateEducation,
  validateLanguages,
} from './Utils/validateData';

function App() {
  const [cvData, setCvData] = useState({
    header: {
      name: '',
      role: '',
      location: '',
      phone: '',
      email: '',
      links: {
        portfolio: '',
        github: '',
        linkedin: '',
      },
    },
    summary: '',
    experience: [
      {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        responsibilities: [{ id: crypto.randomUUID(), text: '' }],
        from: '',
        to: '',
      },
    ],
    skills: {
      technical: [],
      soft: [],
    },
    education: [
      {
        id: crypto.randomUUID(),
        program: '',
        provider: '',
        educationLocation: '',
        educationFrom: '',
        educationTo: '',
      },
    ],
    languages: [{ id: crypto.randomUUID(), language: '', level: '' }],
  });
  const [currentStep, setCurrentStep] = useState(0);
  const sections = [
    'header',
    'summary',
    'experience',
    'skills',
    'education',
    'languages',
  ];
  const { header, summary, experience, skills, education, languages } = cvData;

  function handlePrevious() {
    setCurrentStep(cs => cs - 1);
  }

  function handleNext() {
    switch (currentStep) {
      case 0:
        validateHeader(header) && setCurrentStep(cs => cs + 1);
        break;
      case 1:
        validateSummary(summary) && setCurrentStep(cs => cs + 1);
        break;
      case 2:
        validateExperience(experience) && setCurrentStep(cs => cs + 1);
        break;
      case 3:
        validateSkills(skills) && setCurrentStep(cs => cs + 1);
        break;
      case 4:
        validateEducation(education) && setCurrentStep(cs => cs + 1);
        break;
      case 5:
        validateLanguages(languages) && setCurrentStep(cs => cs + 1);
        break;
    }
  }

  function handleArrayChange(e, step, parentId = null, childId = null) {
    const { name, value } = e.target;
    const section = sections[step];
    if (name.startsWith('responsibility')) {
      setCvData(cvd => {
        const parentIndex = cvd.experience.findIndex(
          elt => elt.id === parentId
        );
        const responsibilities = cvd.experience[parentIndex].responsibilities;
        const index = responsibilities.findIndex(elt => elt.id === childId);
        return {
          ...cvd,
          experience: [
            ...cvd.experience.slice(0, parentIndex),
            {
              ...cvd.experience[parentIndex],
              responsibilities: [
                ...responsibilities.slice(0, index),
                { id: childId, text: value },
                ...responsibilities.slice(index + 1),
              ],
            },
            ...cvd.experience.slice(parentIndex + 1),
          ],
        };
      });
    } else {
      setCvData(cvd => {
        const index = cvd[section].findIndex(elt => elt.id === parentId);
        console.log('information', { name, value, step, parentId, index });
        return {
          ...cvd,
          [section]: [
            // Update the specific section
            ...cvd[section].slice(0, index),
            { ...cvd[section][index], [name]: value },
            ...cvd[section].slice(index + 1),
          ],
        };
      });
    }
  }

  function handleChange(
    e,
    step,
    parentId = null,
    childId = null,
    field = null
  ) {
    const { name, value } = e.target;
    switch (step) {
      case 0:
        setCvData(cvd => {
          if (name.startsWith('links.')) {
            const [, fieldName] = name.split('.');
            return {
              ...cvd,
              header: {
                ...cvd.header,
                links: { ...cvd.header.links, [fieldName]: value },
              },
            };
          } else {
            return {
              ...cvd,
              header: { ...cvd.header, [name]: value },
            };
          }
        });
        break;
      case 1:
        setCvData(cvd => ({ ...cvd, summary: value }));
        break;
      case 3:
        setCvData(cvd => {
          return {
            ...cvd,
            skills: { ...cvd.skills },
          };
        });
        break;
      default:
        handleArrayChange(e, step, parentId, childId);
        break;
    }
  }
  function handleChildAdd(field, parentId = null, value = '') {
    switch (field) {
      case 'responsibilities':
        setCvData(cvd => {
          const index = cvd.experience.findIndex(elt => elt.id === parentId);
          return {
            ...cvd,
            experience: [
              ...cvd.experience.slice(0, index),
              {
                ...cvd.experience[index],
                responsibilities: [
                  ...cvd.experience[index].responsibilities,
                  { id: crypto.randomUUID(), text: '' },
                ],
              },
              ...cvd.experience.slice(index + 1),
            ],
          };
        });
        break;
      case 'technical':
        setCvData(cvd => {
          const index = cvd.skills.technical.findIndex(
            elt => elt.text === value
          );
          if (value !== '' && index === -1) {
            return {
              ...cvd,
              skills: {
                ...cvd.skills,
                technical: [
                  ...cvd.skills.technical,
                  { id: crypto.randomUUID(), text: value },
                ],
              },
            };
          }
          return cvd; // Return unchanged state if not adding
        });
        break;
      case 'soft':
        setCvData(cvd => {
          const index = cvd.skills.soft.findIndex(elt => elt.text === value);
          if (value !== '' && index === -1) {
            return {
              ...cvd,
              skills: {
                ...cvd.skills,
                soft: [
                  ...cvd.skills.soft,
                  { id: crypto.randomUUID(), text: value },
                ],
              },
            };
          }
          return cvd; // Return unchanged state if not adding
        });
        break;
    }
  }
  function handleAdd(step) {
    const section = sections[step];
    switch (section) {
      case 'experience':
        setCvData(cvd => ({
          ...cvd,
          experience: [
            ...cvd.experience,
            {
              id: crypto.randomUUID(),
              company: '',
              position: '',
              responsibilities: [{ id: crypto.randomUUID(), text: '' }],
              from: '',
              to: '',
            },
          ],
        }));
        break;
      case 'education':
        setCvData(cvd => ({
          ...cvd,
          education: [
            ...cvd.education,
            {
              id: crypto.randomUUID(),
              program: '',
              provider: '',
              educationLocation: '',
              educationFrom: '',
              educationTo: '',
            },
          ],
        }));
        break;
      case 'languages':
        setCvData(cvd => ({
          ...cvd,
          languages: [
            ...cvd.languages,
            { id: crypto.randomUUID(), language: '', level: '' },
          ],
        }));
        break;
    }
  }

  function handleChildDelete(field, parentId = null, childId) {
    switch (field) {
      case 'responsibilities':
        setCvData(cvd => {
          const parentIndex = cvd.experience.findIndex(
            elt => elt.id === parentId
          );
          const newResponsibilities = cvd.experience[
            parentIndex
          ].responsibilities.filter(elt => elt.id !== childId);
          return {
            ...cvd,
            experience: [
              ...cvd.experience.slice(0, parentIndex),
              {
                ...cvd.experience[parentIndex],
                responsibilities: newResponsibilities,
              },
              ...cvd.experience.slice(parentIndex + 1),
            ],
          };
        });
        break;
      case 'technical':
        setCvData(cvd => {
          return {
            ...cvd,
            skills: {
              ...cvd.skills,
              technical: cvd.skills.technical.filter(elt => elt.id !== childId),
            },
          };
        });
        break;
      case 'soft':
        setCvData(cvd => {
          return {
            ...cvd,
            skills: {
              ...cvd.skills,
              soft: cvd.skills.soft.filter(elt => elt.id !== childId),
            },
          };
        });
        break;
    }
  }

  function handleDelete(step, id) {
    const section = sections[step];
    setCvData(cvd => ({
      ...cvd,
      [section]: cvd[section].filter(elt => elt.id !== id),
    }));
  }
  function handleCollectionSubmit() {}
  function handleEdit(step) {
    setCurrentStep(step);
  }
  function handlePreviewSubmit() {}

  return (
    <>
      {currentStep === 6 ? (
        <DataPreview
          data={cvData}
          onEdit={handleEdit}
          onSubmit={handlePreviewSubmit}
        />
      ) : (
        <DataCollector
          data={cvData}
          step={currentStep}
          onChange={handleChange}
          onAdd={handleAdd}
          onChildAdd={handleChildAdd}
          onDelete={handleDelete}
          onChildDelete={handleChildDelete}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSubmit={handleCollectionSubmit}
        />
      )}
    </>
  );
}

export default App;
