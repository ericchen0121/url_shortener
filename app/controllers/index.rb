get '/' do
  @urls = Url.all.sort! { |a,b| b.id <=> a.id }
  erb :index
end

post '/shorten' do
  p params
  dbcly = Url.create(long: params[:long])
  p dbcly.errors.full_messages.join(',')
  redirect '/'
end

get '/url_click/:id' do |id|
  url = Url.find(id)
  url.update_attribute(:clicks, url.clicks + 1)
  redirect(url.long)
end
