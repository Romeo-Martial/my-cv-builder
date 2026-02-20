import { useState, useEffect } from 'react';
import './App.css';
import { loadData, saveData } from './Utils/storage';
import {
  validateHeader,
  validateSummary,
  validateExperience,
  validateSkills,
  validateEducation,
  validateLanguages,
} from './Utils/validateData';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

function App() {
  const defaultCvData = {
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
  };
  const [cvData, setCvData] = useState(() => {
    return loadData(defaultCvData);
  });

  const sections = [
    'header',
    'summary',
    'experience',
    'skills',
    'education',
    'languages',
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const isCvPreview = location.pathname.includes('/cvPreview');

  const { header, summary, experience, skills, education, languages } = cvData;

  const getCurrentSection = () => {
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts.at(-1);
    return sections.includes(lastPart) ? lastPart : 'header';
  };

  const currentSection = getCurrentSection();
  const currentStep = sections.indexOf(currentSection);
  const nextStep = currentStep + 1;
  const nextSection = sections[nextStep];

  useEffect(() => {
    saveData(cvData);
  }, [cvData]);

  function handlePrevious() {
    navigate(-1);
  }

  function handleNext() {
    switch (currentStep) {
      case 0:
        validateHeader(header) &&
          navigate(`/app/dataCollection/${nextSection}`);
        break;
      case 1:
        validateSummary(summary) &&
          navigate(`/app/dataCollection/${nextSection}`);
        break;
      case 2:
        validateExperience(experience) &&
          navigate(`/app/dataCollection/${nextSection}`);
        break;
      case 3:
        validateSkills(skills) &&
          navigate(`/app/dataCollection/${nextSection}`);
        break;
      case 4:
        validateEducation(education) &&
          navigate(`/app/dataCollection/${nextSection}`);
        break;
      case 5:
        validateLanguages(languages) && navigate(`/app/dataReview`);
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
    const section = sections[step];
    navigate(`/app/dataCollection/${section}`);
  }
  function handleReviewSubmit() {
    navigate('/app/cvPreview');
  }
  function handleBackToEdit() {
    navigate('/app/dataCollection/header');
  }
  function handleReset() {
    localStorage.removeItem('cvData');
    navigate('/app/dataCollection/header');
    setCvData(defaultCvData);
  }
  function handleCvExport() {
    // Create a new window with just the CV content
    const printWindow = window.open('', '_blank');
    const cvElement = document.querySelector('.cv');
    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
        } catch (e) {
          return '';
        }
      })
      .join('\n');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>CV Export</title>
          <style>${styles}</style>
        </head>
        <body style="margin: 0; padding: 0; background: white;">
          ${cvElement.outerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();

    // Wait for content to load then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    };
  }

  return (
    <>
      <Outlet
        context={{
          cvData,
          currentStep,
          handleChange,
          handleAdd,
          handleChildAdd,
          handleDelete,
          handleChildDelete,
          handleNext,
          handlePrevious,
          handleReset,
          handleCollectionSubmit,
          handleEdit,
          handleReviewSubmit,
          handleBackToEdit,
          handleCvExport,
        }}
      />
      {isCvPreview && (
        <div className="step-footer">
          <Link to="/">
            <button className="btn btn--secondary role-action">
              Back To Home
            </button>
          </Link>
          <button
            className="btn btn--secondary role-action"
            onClick={handleBackToEdit}
          >
            Back To Edit
          </button>
          <button
            className="btn btn--primary role-action"
            onClick={handleCvExport}
          >
            Export PDF
          </button>
        </div>
      )}
    </>
  );
}

export default App;
