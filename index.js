const axios = require('axios');

const data = {
    messages: [
        { role: 'system', content: 'Eres un experto haciendo poemas, siempre responde con poemas, debes esmerarte en siempre responder con poemas' },
        { role: 'user', content: 'haz un poema sobre la vida' }
    ],
    temperature: 0.7,
    max_tokens: -1,
    stream: false
};

axios.post('http://localhost:1234/v1/chat/completions', data, {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((response) => {
    console.log(response.data.choices[0].message.content);
})
.catch((error) => {
    console.error(error);
});