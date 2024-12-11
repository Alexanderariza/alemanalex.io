// netlify/functions/openai.js

const fetch = require('node-fetch');  // Usamos node-fetch para hacer la solicitud HTTP

exports.handler = async function(event, context) {
    const prompt = event.queryStringParameters.prompt;

    const apiKey = 'tu-clave-api-aqui';  // Coloca tu clave API de OpenAI aquí
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${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}`,
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "Eres un profesor de alemán hablando en español." },
                { role: "user", content: prompt }
            ],
            max_tokens: 100
        }),
    });

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data.choices[0].message.content || "No se recibió respuesta esperada."),
    };
};
