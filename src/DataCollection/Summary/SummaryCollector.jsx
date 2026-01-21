import Input from '../Controls/Controls';

export default function SummaryCollector({ data, onChange }) {
  return (
    <>
      <h2>Professional Summary</h2>
      <Input type="textarea" label="Summary" value={data} onChange={onChange} />
    </>
  );
}
