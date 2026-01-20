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
  const isValid = validateData(cvData);
  return <>{isValid ? <DataCollector /> : <DataPreview />}</>;
}

export default App;
