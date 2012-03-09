desc "Watch .js and compiles to public/javascripts"
task :watch do
  require 'fssm'
  Rake::Task['build'].invoke
  FSSM.monitor('./', '*.js') do
    update do |base, relative|
      sh "closure --js #{relative} --js_output_file ./public/javascripts/#{relative.gsub(".js",".min.js")}"
    end
  end
end

task :build do
  relative = 'jquery-chosen-sortable.js'
  sh "closure --js #{relative} --js_output_file ./public/javascripts/#{relative.gsub(".js",".min.js")}"
end