module.exports = function pipeThrough(func) {
  const stdin = process.stdin
    , stdout = process.stdout
    , inputChunks = [];

  stdin.resume();
  stdin.setEncoding('utf8');

  stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
  });

  stdin.on('end', function () {
    const input = inputChunks.join();
    stdout.write(func(input));
  });
};
