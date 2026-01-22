The App component will need three children to achieve its task:

- DataCollector: which will be responsible for collecting data
- DataPreview: which will be responsible for showing the data to the user for confirmation.
  Since the three children will share the same date and there is no communication between children, I'll lift the state up to the parent component which will first pass it down to them as props (later we'll see if we can use context)
  App component will also provide each component with a handler to request actions on the data regarding their specific task.
- for DataCollection: onChange, onSubmit
- for DataPreview: onEdit, onSubmit
  Below is the form of the state managing the data collected:
  const [cvData, setCvData] = {
  header: {
  name: "",
  role: "",
  location: "",
  phone: "",
  email: "",
  links: {
  portfolio: "",
  github: "",
  linkedin: "",
  },
  },
  summary: "",
  experience: [
  {
  id: crypto.randomUUID(),
  company: "",
  position: "",
  responsibilities: [],
  from: "",
  to: "",
  },
  ],
  skills: {
  technical: [],
  soft: [],
  },
  education: [
  {
  id: crypto.randomUUID(),
  program: "",
  provider: "",
  educationLocation: "",
  educationFrom: "",
  educationTo: "",
  },
  ],
  languages: [{ id: crypto.randomUUID(), language: "", level: "" }],
  };
  There will be also a derived state to tell App whether the data are valid or not
  const isValid = validateData(cvData);
  where validateData(data) is an utility function to validate the data.
  - DataCollector Component:
    It is a wizard which has seven children each responsible to collect data of each section.
    That is:
  - Header
  - Summary
  - Experience
  - Skills
  - Education
  - Languages
    DataCollector will coordinate these children using the state currentStep which will indicate at which step we are currently are. It will not allow to go to the next step unless the data of the current step is validated. So every child should request validation of its data if the user request to go to the next step.
    this is how the state will be defined:
    const currentStep = useState(o);

    Now I'll need to implement each child of DataCollector.
    Each child will render controlled input components; they will receive data related to their field and a way to request change.

