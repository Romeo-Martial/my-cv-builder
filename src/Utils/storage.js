export function loadData(data) {
  try {
    const stored = localStorage.getItem('cvData');
    return stored ? JSON.parse(stored) : data;
  } catch {
    return data;
  }
}

export function saveData(data) {
  localStorage.setItem('cvData', JSON.stringify(data));
}
