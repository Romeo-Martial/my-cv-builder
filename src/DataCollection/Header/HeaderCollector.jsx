import Input from '../Controls/Controls';

export default function HeaderCollector({ data, onChange, step }) {
  const { name, role, location, phone, email, links } = data;
  const { portfolio, github, linkedin } = links;
  return (
    <>
      <h2>Personal Information</h2>
      <Input
        label="Name"
        name="name"
        value={name}
        onChange={e => onChange(e, step)}
      />
      <Input
        label="Role"
        name="role"
        value={role}
        onChange={e => onChange(e, step)}
      />
      <Input
        label="Location"
        name="location"
        value={location}
        onChange={e => onChange(e, step)}
      />
      <Input
        label="Phone"
        name="phone"
        value={phone}
        onChange={e => onChange(e, step)}
      />
      <Input
        label="Email"
        name="email"
        value={email}
        onChange={e => onChange(e, step)}
      />
      <Input
        label="Portfolio"
        name="links.portfolio"
        value={portfolio}
        onChange={e => onChange(e, step)}
      />
      <Input
        label="Github"
        name="links.github"
        value={github}
        onChange={e => onChange(e, step)}
      />
      <Input
        label="LinkedIn"
        name="links.linkedin"
        value={linkedin}
        onChange={e => onChange(e, step)}
      />
    </>
  );
}
