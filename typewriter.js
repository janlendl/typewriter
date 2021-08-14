const sentence = "hello there from lighthouse labs";
for (const index in sentence) {
  setTimeout(() => process.stdout.write(sentence[index]), 75 * index);
}
setTimeout(() => console.log(), 75 * sentence.length);