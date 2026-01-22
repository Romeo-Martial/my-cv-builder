import { useState } from 'react';
import './App.css';
import validateData from './Utils/validateData';
import DataCollector from './DataCollection/DataCollector';
import DataPreview from './DataPreview/DataPreview';

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
        responsibilities: [],
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
  const sections = [
    'header',
    'summary',
    'experience',
    'skills',
    'education',
    'languages',
  ];
  const { header, summary, experience, skills, education, languages } = cvData;
  const isValid = validateData(cvData);

  function handleArrayChange(e, step, id) {
    const { name, value } = e.target;
    const section = sections[step];
    setCvData(cvd => {
      const index = cvd[section].findIndex(elt => elt.id === id);
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

  function handleChange(e, step, id = null) {
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
      case 4:
        break;
      default:
        handleArrayChange(e, step, id);
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
              responsibilities: [],
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
  function handleDelete() {}
  function handleCollectionSubmit() {}
  function handleEdit() {}
  function handlePreviewSubmit() {}

  return (
    <>
      {isValid ? (
        <DataCollector
          data={cvData}
          onChange={handleChange}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onSubmit={handleCollectionSubmit}
        />
      ) : (
        <DataPreview
          data={cvData}
          onEdit={handleEdit}
          onSubmit={handlePreviewSubmit}
        />
      )}
    </>
  );
}

export default App;
