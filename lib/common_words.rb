def most_common(string)
  words = string.split(' ')
  word_counts = Hash.new(0)
  punctuation = ['.', ',', '!', '?', ';', ':']
  words.each do |word|
    word.slice!(-1) if punctuation.any? { |punct| punct == word[-1] }
    word_counts[word.downcase] += 1
  end
  word_counts = word_counts.sort_by { |k, v| -v }
  # Calling 'sort_by' on a hash returns an array of arrays with key-value pairs.
  most_common_words = []
  word_counts.each do |word_and_frequency|
    if word_and_frequency[1] == word_counts.first[1]
      most_common_words << word_and_frequency[0]
    end
  end
  most_common_words
end

most_common('This is a string of words, it has punctuation and more than one of the word this this this.')
most_common("test test test greg jordan mark mark mark")
