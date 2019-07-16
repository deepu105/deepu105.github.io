module Jekyll
  # A simple stub for the Dev.to CodeSandBox tag
  class CodeSandBoxTag < Liquid::Tag
    def initialize(_tag_name, url, _tokens)
      super
      @article = url
    end
  
    def render(_context)
    "<a href='#{@article}'>#{@article}</a>"
    end
  end
end
  
  Liquid::Template.register_tag("codesandbox", Jekyll::CodeSandBoxTag)