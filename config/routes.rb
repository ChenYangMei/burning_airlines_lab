Rails.application.routes.draw do

  resources :planes
  resources :users
  resources :flights

  # Session
  get '/login' => 'session#new', :as => "login"
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy', :as => "logout"

end
