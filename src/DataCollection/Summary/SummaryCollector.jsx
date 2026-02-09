import Input from '../Controls/Controls';

export default function SummaryCollector({ data, onChange, step }) {
  const currentLength = data.length;
  const minLength = 50;
  const maxLength = 500;
  const isValid = currentLength >= minLength;
  return (
    <div className="stack">
      <h2 className="it-section-title role-orientation">
        Professional Summary
      </h2>
      <div className="it-section-instructions role-instruction">
        <p className="it-section-goal">
          Write a compelling professional summary that highlights your key
          skills, experience, and career goals. This will be the first thing
          employers read on your CV.
        </p>
        <div className="it-guidelines">
          <h4 className="it-guidelines-title">Guidelines:</h4>
          <ul className="it-guidelines-list">
            <li className="it-guidelines-item">
              Keep it concise but impactful (50-500 characters)
            </li>
            <li className="it-guidelines-item">
              Highlight your most relevant skills and experience
            </li>
            <li className="it-guidelines-item">
              Mention your career goals or what you're looking for
            </li>
            <li className="it-guidelines-item">
              Use action words and specific achievements when possible
            </li>
            <li className="it-guidelines-item">
              Tailor it to the type of roles you're applying for
            </li>
          </ul>
        </div>
      </div>
      <Input
        type="textarea"
        name="summary"
        label="Summary"
        value={data}
        onChange={e => onChange(e, step)}
      />
      <div className="counter">
        <div
          className={`it-constraint-evaluation role-feedback ${
            isValid ? 'is-success' : 'is-warning'
          }`}
        >
          {currentLength}/{maxLength} characters
        </div>
        <div className="it-constraint role-instruction">
          (Minimum {minLength} characters required)
        </div>
      </div>
      <div className="it-writing-tips-section role-instruction">
        <h4 className="it-writing-tips-title">💡 Writing Tips:</h4>
        <ul className="it-writing-tips-list">
          <li className="it-writing-tip">
            <strong>Start Strong:</strong> Begin with your job title and years
            of experience
          </li>
          <li className="it-writing-tip">
            <strong>Be Specific:</strong> Mention key technologies, tools, or
            achievements
          </li>
          <li className="it-writing-tip">
            <strong>Show Value:</strong> Explain what you bring to potential
            employers
          </li>
          <li className="it-writing-tip">
            <strong>End with Goals:</strong> State what you're looking for in
            your next role
          </li>
        </ul>
      </div>
    </div>
  );
}
