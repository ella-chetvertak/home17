import main from './styles/main.scss'
const data = {
    data: 'My test data'
};

fetch('/api/test', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
});