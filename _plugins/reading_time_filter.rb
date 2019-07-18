# Usage: Read this in {{ page.content | reading_time }}

WORD_PER_MINUTE = 180

def calculate_time( input )
  words = input.split.size;
  minutes = ( words / WORD_PER_MINUTE ).floor
  minutes_label = minutes == 1 ? "min" : "mins"
  return minutes, minutes_label
end

module ReadingTimeFilter
  def reading_time( input )
    minutes, minutes_label = calculate_time(input)
    minutes > 0 ? "#{minutes} #{minutes_label} read" : "Less than 1 min read"
  end

  Liquid::Template.register_filter(ReadingTimeFilter)
end
