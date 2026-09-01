source "https://rubygems.org"

# github-pages bundles the exact Jekyll + plugin versions GitHub Pages
# builds with, so `bundle exec jekyll serve` locally matches production.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows/JRuby compatibility (harmless on Linux/Mac, safe to keep)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
