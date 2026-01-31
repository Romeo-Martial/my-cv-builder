import DisplayObjects from './Controls/controls';

export default function EducationPreview({ data, onEdit }) {
  return (
    <>
      <h2>Education</h2>
      {data.map((educationItem, index) => {
        const keys = Object.keys(educationItem);
        const fixedData = keys.reduce((acc, key) => {
          switch (key) {
            case 'educationLocation':
              acc['location'] = educationItem[key];
              return acc;
            case 'educationFrom':
              acc['from'] = educationItem[key];
              return acc;
            case 'educationTo':
              acc['to'] = educationItem[key];
              return acc;
            default:
              acc[key] = educationItem[key];
              return acc;
          }
        }, {});

        return (
          <div key={'education' + index}>
            <p>Education {index + 1}</p>
            <DisplayObjects data={fixedData} />
          </div>
        );
      })}
      <button onClick={() => onEdit(4)}>Edit</button>
    </>
  );
}
