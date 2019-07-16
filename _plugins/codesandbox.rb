module Jekyll
  # A simple stub for the Dev.to CodeSandBox tag
  class CodeSandBoxTag < Liquid::Tag
    def initialize(name, id, tokens)
        super
        @id = id.split(/\s+/)[0]
    end

    def render(context)
        %(<p>
            <div class="embed-video-container">
                <iframe src="https://codesandbox.io/embed/#{@id}?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
            </div>
        </p>)
    end
  end
end

  Liquid::Template.register_tag("codesandbox", Jekyll::CodeSandBoxTag)
