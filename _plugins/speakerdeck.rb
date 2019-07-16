module Jekyll
    class Speakerdeck < Liquid::Tag
      @@width = 640
      @@height = 510

      def initialize(name, id, tokens)
        super
        @id = id
      end

      def render(context)
        @id_stripped = @id.strip.tr('"', '')
        %(<p>
            <script async class="speakerdeck-embed" data-id="#{@id_stripped}" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
            <noscript>
                <a href="//speakerdeck.com/player/#{@id_stripped}">
                <img alt="Speakerdeck" src="//speakerd.s3.amazonaws.com/presentations/#{@id_stripped}/slide_0.jpg">
                </a>
            </noscript>
          </p>)
      end
    end
  end

  Liquid::Template.register_tag('speakerdeck', Jekyll::Speakerdeck)
