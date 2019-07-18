module Jekyll
    class YoutubeTag < Liquid::Tag

      def initialize(name, id, tokens)
        super
        @id = id
      end

      def render(context)
        %(<p>
            <div class="embed-video-container">
                <iframe width="710" height="399" src="http://www.youtube.com/embed/#{@id}" allowfullscreen></iframe>
            </div>
        </p>)
      end
    end
  end

  Liquid::Template.register_tag('youtube', Jekyll::YoutubeTag)
