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