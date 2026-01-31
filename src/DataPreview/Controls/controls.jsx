export default function DisplayObjects({ data }) {
  const ObjectKeys = Object.keys(data);
  return (
    <>
      {ObjectKeys.map(key => {
        switch (key) {
          case 'links':
            const nestedKeys = Object.keys(data[key]);
            return (
              <div key={key}>
                {nestedKeys.map(nestedKey => {
                  return (
                    <p key={nestedKey}>
                      <strong>
                        {nestedKey.charAt(0).toUpperCase() +
                          nestedKey.slice(1) +
                          ': '}
                      </strong>
                      {data[key][nestedKey]}
                    </p>
                  );
                })}
              </div>
            );
          case 'responsibilities':
          case 'technical':
          case 'soft':
            return (
              <div key={key}>
                <strong>{key + ': '} </strong>
                <ul>
                  {data[key].map(elt => {
                    return <li key={elt.id}>{elt.text}</li>;
                  })}
                </ul>
              </div>
            );
          default:
            return (
              key !== 'id' && (
                <p key={key}>
                  <strong>
                    {key.charAt(0).toUpperCase() + key.slice(1) + ': '}
                  </strong>
                  {data[key]}
                </p>
              )
            );
        }
      })}
    </>
  );
}
