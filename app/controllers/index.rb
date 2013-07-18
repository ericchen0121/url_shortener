get '/' do
  @urls = Url.all.sort! { |a,b| b.id <=> a.id }
  erb :index
end

post '/shorten' do
  p params
  Url.create(long: params[:long])
  redirect '/'
end

get '/url_click/:id' do |id|
  num = Url.find(id).clicks
  Url.find(id).update_attributes(clicks: num + 1)
  redirect(Url.find(id).long)
end
