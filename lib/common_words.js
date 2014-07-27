var mostCommonWords = function(string){
  var words = string.split(' ');
  var word_counts = {};

  for(var i = 0; i < words.length; ++i){
    if(words[i][words[i].length - 1] === '.' || words[i][words[i].length - 1] === ','
      || words[i][words[i].length - 1] === '!' || words[i][words[i].length - 1] === '?'
      || words[i][words[i].length - 1] === '.' || words[i][words[i].length - 1] === ':'
      || words[i][words[i].length - 1] === ';'){
      words[i] = words[i].slice(0, -1);
    }
    word_counts[words[i].toLowerCase()] = 0;
  }

  for(i = 0; i < words.length; ++i){
    word_counts[words[i].toLowerCase()]++;
  }

  console.log(word_counts);
}

mostCommonWords('This is a string. It uses some words more often than others. Like this.')
mostCommonWords('There are three occurences of the word three in this string. Three times I say!  Say what? What is going on?')
