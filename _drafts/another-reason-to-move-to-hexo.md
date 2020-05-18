I wanted to do some dev on the radio-nope.com site. This is a new machine, so I start by checking to see if I have the things I need installed and setup already. Here is how thing only went downhill from there...

run: jekyll? fail
run: bundler? fail
run: gem install jekyll? fail
run: brew update? fail
run: brew doctor? success!
run: brew update? success!
run: brew install rvenv? success!
run: rbenv install 2.3.1? success!
run: gem install jekyll? fail
add: some gem paths in profile? success!
run: gem install jekyll? success!
run: gem install bundler? success!
run: bundle install? fail
add: gem bin to path? success!
run: bundle install? fail
add: server source to gemfile? success!
run: bundle install? fail
run: gem install nokogiri -v '1.6.8'? fail
run: bundle config build.nokogiri --use-system-libraries? success!
run: bundle install? fail

give up.

come back after an hour or so...

run: xcode-select --install? success!
run: bundle install? success!
run: jekyll serve? fail
run: bundle exec jekyll serve? success!

ahhh....

now I go to bed.
