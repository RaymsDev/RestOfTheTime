#!/usr/bin/env node
import readline from "readline";

// Simple CLI Application
const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string) => {
  return new Promise<string>((resolve) => cli.question(question, resolve));
};

const main = async () => {
  console.log("Welcome to the Rest Of The Time!");
  const startingDateInput = await askQuestion("What's your starting date? ");
  const startingDate = new Date(startingDateInput);
  console.log(`Starting date is: ${startingDate.toLocaleDateString()}`);
  cli.close();
};

main();
