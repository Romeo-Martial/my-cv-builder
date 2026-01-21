import Input from '../Controls/Controls';

export default function HeaderCollector({ data, onChange }) {
  const { name, role, location, phone, email, links } = data;
  const { portfolio, github, linkedin } = links;
  return (
    <>
      <h2>Personal Information</h2>
      <Input label="Name" value={name} onChange={onChange} />
      <Input label="Role" value={role} onChange={onChange} />
      <Input label="Location" value={location} onChange={onChange} />
      <Input label="Phone" value={phone} onChange={onChange} />
      <Input label="Email" value={email} onChange={onChange} />
      <Input label="Portfolio" value={portfolio} onChange={onChange} />
      <Input label="Github" value={github} onChange={onChange} />
      <Input label="LinkedIn" value={linkedin} onChange={onChange} />
    </>
  );
}
