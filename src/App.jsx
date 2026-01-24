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
        responsibilities: [{ id: crypto.randomUUID(), text: '' }],
        from: '',
        to: '',
      },
    ],
    skills: {
      technical: [{ id: crypto.randomUUID(), skil: '' }],
      soft: [{ id: crypto.randomUUID(), skill: '' }],
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

  function handleArrayChange(e, step, id, parentId = null) {
    const { name, value } = e.target;
    const section = sections[step];
    if (name.startsWith('responsibility')) {
      setCvData(cvd => {
        const parentIndex = cvd.experience.findIndex(
          elt => elt.id === parentId
        );
        const responsibilities = cvd.experience[parentIndex].responsibilities;
        const index = responsibilities.findIndex(elt => elt.id === id);
        return {
          ...cvd,
          experience: [
            ...cvd.experience.slice(0, parentIndex),
            {
              ...cvd.experience[parentIndex],
              responsibilities: [
                ...responsibilities.slice(0, index),
                { id: id, text: value },
                ...responsibilities.slice(index + 1),
              ],
            },
            ...cvd.experience.slice(parentIndex + 1),
          ],
        };
      });
    } else {
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
  }

  function handleChange(e, step, id = null, parentId = null) {
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
        handleArrayChange(e, step, id, parentId);
        break;
    }
  }
  function handleChildAdd(field, parentId) {
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

  function handleChildDelete(field, parentId, childId) {
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
  function handleEdit() {}
  function handlePreviewSubmit() {}

  return (
    <>
      {isValid ? (
        <DataCollector
          data={cvData}
          onChange={handleChange}
          onAdd={handleAdd}
          onChildAdd={handleChildAdd}
          onDelete={handleDelete}
          onChildDelete={handleChildDelete}
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
