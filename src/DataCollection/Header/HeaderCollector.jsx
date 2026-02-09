import Input from '../Controls/Controls';

export default function HeaderCollector({ data, onChange, step }) {
  const { name, role, location, phone, email, links } = data;
  const { portfolio, github, linkedin } = links;
  return (
    <div className="stack">
      <h2 className="it-section-title role-orientation">
        Personal Information
      </h2>
      <div className="cluster">
        <div className="input-field">
          <Input
            label="Full Name"
            name="name"
            value={name}
            onChange={e => onChange(e, step)}
            placeholder="Your Name"
          />
        </div>
        <div className="input-field">
          <Input
            label="Role"
            name="role"
            value={role}
            onChange={e => onChange(e, step)}
            placeholder="Your Professional Role"
          />
        </div>
        <div className="input-field">
          <Input
            label="Location"
            name="location"
            value={location}
            onChange={e => onChange(e, step)}
            placeholder="Your Location"
          />
        </div>
        <div className="input-field">
          <Input
            label="Phone"
            name="phone"
            value={phone}
            onChange={e => onChange(e, step)}
            placeholder="Your phone Number"
            type="tel"
          />
        </div>
        <div className="input-field input-field--full">
          <Input
            label="Email"
            name="email"
            value={email}
            onChange={e => onChange(e, step)}
            placeholder="your.email@example.com"
            type="email"
          />
        </div>
      </div>
      <div className="cluster">
        <div className="input-field">
          <Input
            label="Portfolio"
            name="links.portfolio"
            value={portfolio}
            onChange={e => onChange(e, step)}
            placeholder="yoursite.com or https://yoursite.com"
            type="url"
          />
        </div>
        <div className="input-field">
          <Input
            label="Github"
            name="links.github"
            value={github}
            onChange={e => onChange(e, step)}
            placeholder="github.com/username or https://github.com/username"
            type="url"
          />
        </div>
        <div className="input-field">
          <Input
            label="LinkedIn"
            name="links.linkedin"
            value={linkedin}
            onChange={e => onChange(e, step)}
            placeholder="linkedin.com/in/username or https://linkedin.com/in/username"
            type="url"
          />
        </div>
      </div>
    </div>
  );
}
