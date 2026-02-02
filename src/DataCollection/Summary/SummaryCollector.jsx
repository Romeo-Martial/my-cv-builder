import Input from '../Controls/Controls';

export default function SummaryCollector({ data, onChange, step }) {
  const currentLength = data.length;
  const minLength = 50;
  const maxLength = 500;
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
            <li>Keep it concise but impactful (50-500 characters)</li>
            <li>Highlight your most relevant skills and experience</li>
            <li>Mention your career goals or what you're looking for</li>
            <li>Use action words and specific achievements when possible</li>
            <li>Tailor it to the type of roles you're applying for</li>
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
        <div className="it-constraint-evaluation role-feedback">
          {currentLength}/{maxLength} characters
        </div>
        <span className="it-constraint role-instruction">
          (Minimum {minLength} characters required)
        </span>
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
