module Jekyll
  # A simple stub for the Dev.to link tag
  class LinkTag < Liquid::Tag
    def initialize(_tag_name, url, _tokens)
      @article = url
    end
  
    def render(_context)
    "<a href='#{@article}'>#{@article}</a>"
    end
  end
end
  
  Liquid::Template.register_tag("link", Jekyll::LinkTag)