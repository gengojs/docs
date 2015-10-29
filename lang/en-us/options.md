# Options

```toml
# Options For Default Plugins
# ===========================

# API Options
# See https://github.com/gengojs/plugin-api for documentation.
[api]
  # 'global' refers to the api use for i18n your phrases. 
  #          ( e.g. __("Hello") )
  global = "__"
  # 'localize' refers to the api use for i18n your date, time, and number. 
  #            ( e.g. __l("ja").date().now() )
  localize = "__l"

# Backend Options
# See https://github.com/gengojs/plugin-backend for documentation.
[backend]
  # 'cache' refers to caching and enables gengo to store the dictionary 
  #         without changes until the server has been restarted.
  cache = true
  # 'directory' refers to the path to your dictionary
  directory = "./locales"
  # 'extension' refers to the file extension of your dictionary.
  extension = "json"
  # 'prefix' refers to the prefix in your file's name.
  prefix = ""

# Header Options
# See https://github.com/gengojs/plugin-header for documentation.
[header]
  # 'default' refers to the default locale of your app.
  default = "en-US"
  # 'supported' refers to the locales supported in your app.
  supported = ["en-US"]
  # 'headder.detect' refers to the detection type. 
  #                  Notes: 
  #                   * It is best to use one type of detection.
  #                   * Any PRs will be accepted that may help 
  #                     gengojs-accept detect multiple types.
  [header.detect]
    # 'cookie' enables cookie parsing for the locale.
    cookie = false
    # 'header' enables header parsing for the locale.
    #          ( e.g. Accept-Language )
    header = true
    # 'query' enables query parsing for any key that refers to the locale.
    #         ( e.g. http://example.com/hello?locale=ja )
    query = false
    # 'subdomain' enables subdomain parsing for the locale.
    #             ( e.g. http://ja.example.com )
    subdomain = false
    # url' enables url parsing for the locale.
    #      ( e.g. http://www.example.com/ja )
    url = false
# 'header.keys' refers to the key used in cookie and query parsing.
[header.keys]
  cookie = "locale"
  query = "locale"

# Parser Options
# See https://github.com/gengojs/plugin-parser for documentation.
[parser]
  # 'type' refers to the type of parser used.
  #        ( e.g. 'default' = template/interpolation and sprintf, 'format' = message format, '*' = all/auto )
  type = "default"
  # 'keywords' refers to the keywords used in your dictionary.
  [parser.keywords]
    # 'default' refers to the default phrase 
    #           in your dictionary (in your native language).
    default = "default"
    # 'global' refers to the globally used dictionary 
    #          when router is enabled (router independent).
    global = "global"
    # 'translated' refers to the translated phrase 
    #              in your dictionary (in another language).
    translated = "translated"
  # 'parser.markdow n' refers to options for markdown-it.
  #                   See https://github.com/markdown-it/markdown-it for documentation.
  [parser.markdown]
    breaks = false
    enabled = false
    html = false
    langPrefix = "language-"
    linkify = false
    quotes = "“”‘’"
    typographer = false
    xhtmlOut = false
  # 'parser.sprintf' refers to sprintf
  [parser.sprintf]
    # 'enabled' refers to enabling sprintf.
    enabled = true
  # 'parser.template' refers to interpolation.
  #                   ( e.g. __('{{greet}}', 'hello') -> 'hello'
  [parser.template]
    # 'enabled' refers to enabling interpolation.
    enabled = true
    # 'open' refers to opening expression.
    open = "{{"
    # 'close' refers to opening expression.
    close = "}}"

# Router Options
# See https://github.com/gengojs/plugin-router for documentation.
[router]
  # 'enabled' refers to enabling the special data structure in your dictionary.
  #           ( e.g. URL path = '/greet/', Dictionary = { 'index': {'greet': { /* ... */ } } } )
  enabled = false
```

There are three file extensions supported:

* JSON
* YAML
* TOML
* JS

Each plugin have their own defaults (if applicable) but to override them simply use one of the following ways:

Use a path to the options:
gengo('path to options');
Directly override the options:
gengo({
  "parser": {/* ... */}
});
