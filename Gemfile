source "https://rubygems.org"

# GitHub Pages pinned dependencies. `github-pages` guarantees the same
# versions used by the remote build server.
gem "github-pages", group: :jekyll_plugins

# Whitelisted plugins (also declared in _config.yml)
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows and JRuby do not include zoneinfo files.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
