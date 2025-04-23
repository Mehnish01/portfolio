const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });

// Greetings
manager.addDocument('en', 'Hello', 'greet.hello');
manager.addDocument('en', 'Hi', 'greet.hello');
manager.addDocument('en', 'Hey', 'greet.hello');

// Asking how the bot is
manager.addDocument('en', 'How are you?', 'greet.howareyou');
manager.addDocument('en', 'How is your day?', 'greet.howareyou');

// Asking for the bot's name
manager.addDocument('en', 'What is your name?', 'bot.name');
manager.addDocument('en', 'Who are you?', 'bot.name');

// Adding responses
manager.addAnswer('en', 'greet.hello', 'Hello! How can I assist you today?');
manager.addAnswer('en', 'greet.howareyou', 'I am a chatbot, always happy to help!');
manager.addAnswer('en', 'bot.name', 'I am an AI chatbot built with NLP.js.');

async function trainAndChat() {
    console.log('Training the chatbot... Please wait.');
    await manager.train(); // Train the NLP model
    manager.save(); // Save the trained model
    console.log('Chatbot is ready!');

    // Example conversations
    const response1 = await manager.process('en', 'Hello');
    console.log('User: Hello');
    console.log('Bot:', response1.answer);

    const response2 = await manager.process('en', 'What is your name?');
    console.log('User: What is your name?');
    console.log('Bot:', response2.answer);
}

// Run the chatbot
trainAndChat();
