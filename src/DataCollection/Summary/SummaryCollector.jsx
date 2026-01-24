import Input from '../Controls/Controls';

export default function SummaryCollector({ data, onChange, step }) {
  const currentLength = data.length;
  const minLength = 50;
  const maxLength = 500;
  return (
    <>
      <h2>Professional Summary</h2>
      <div>
        <p>
          Write a compelling professional summary that highlights your key
          skills, experience, and career goals. This will be the first thing
          employers read on your CV.
        </p>
        <div>
          <h4>Guidelines:</h4>
          <ul>
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
      <div>
        {currentLength}/{maxLength} characters
      </div>
      <span>(Minimum {minLength} characters required)</span>
      <div>
        <h4>💡 Writing Tips:</h4>
        <div>
          <div>
            <strong>Start Strong:</strong> Begin with your job title and years
            of experience
          </div>
          <div>
            <strong>Be Specific:</strong> Mention key technologies, tools, or
            achievements
          </div>
          <div>
            <strong>Show Value:</strong> Explain what you bring to potential
            employers
          </div>
          <div>
            <strong>End with Goals:</strong> State what you're looking for in
            your next role
          </div>
        </div>
      </div>
    </>
  );
}
