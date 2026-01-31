import { useState, Fragment } from 'react';
import Input from '../Controls/Controls';

export default function SkillsCollector({
  data,
  step,
  onChildAdd,
  onChildDelete,
}) {
  const { technical, soft } = data;
  const isTechnicalEmpty = technical.length === 1 && technical[0].text === '';
  const isSoftEmpty = soft.length === 1 && soft[0].text === '';
  const [technicalInput, setTechnicalInput] = useState('');
  const [softInput, setSoftInput] = useState('');

  function handleSkillsChange(e, field) {
    field === 'technical'
      ? setTechnicalInput(e.target.value)
      : setSoftInput(e.target.value);
  }
  return (
    <>
      <h2>Skills</h2>
      <p>
        Add your technical and soft skills to highlight your capabilities to
        employers.
      </p>
      <Input
        label="Technical Skills"
        value={technicalInput}
        onChange={e => handleSkillsChange(e, 'technical')}
        placeholder="Enter your technical skills"
      />
      <button
        onClick={() => {
          onChildAdd('technical', null, technicalInput);
          setTechnicalInput('');
        }}
      >
        Add
      </button>
      {!isTechnicalEmpty && (
        <div>
          {technical.map(elt => (
            <div key={elt.id}>
              <li>{elt.text}</li>
              <button onClick={() => onChildDelete('technical', null, elt.id)}>
                x
              </button>
            </div>
          ))}
        </div>
      )}
      <Input
        label="Soft Skills"
        value={softInput}
        onChange={e => handleSkillsChange(e, 'soft')}
        placeholder="Enter your soft skills"
      />
      <button
        onClick={() => {
          onChildAdd('soft', null, softInput);
          setSoftInput('');
        }}
      >
        Add
      </button>
      {!isSoftEmpty && (
        <div>
          {soft.map(elt => (
            <div key={elt.id}>
              <li>{elt.text}</li>
              <button onClick={() => onChildDelete('soft', null, elt.id)}>
                x
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Tips Section */}
      <div>
        <h4>💡 Tips for Skills</h4>
        <ul>
          <li>
            <strong>Technical Skills:</strong> Include programming languages,
            frameworks, tools, and technologies
          </li>
          <li>
            <strong>Soft Skills:</strong> Highlight interpersonal abilities and
            personal qualities
          </li>
          <li>Be specific and relevant to your target role</li>
          <li>Order skills by proficiency or relevance</li>
          <li>Avoid redundancy between technical and soft skills</li>
        </ul>
      </div>
    </>
  );
}
