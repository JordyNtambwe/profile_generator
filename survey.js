const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const answers = [];

const askQuestion = (index) => {
  rl.question(questions[index] + ' ', (answer) => {
    answers.push(answer);
    
    if (index === questions.length - 1) {
      const profile = `Hello, my name is ${answers[0]}. I enjoy ${answers[1]} while listening to ${answers[2]}. My favorite meal is ${answers[3]}, and I love to eat ${answers[4]} for that meal. My favorite sport is ${answers[5]}, and my superpower is ${answers[6]}.`;
      
      console.log(profile);
      rl.close();
    } else {
      askQuestion(index + 1);
    }
  });
};

askQuestion(0);