Rails.application.routes.draw do

  resources :reservations
  resources :planes
  resources :users
  resources :flights

  get '/search' => 'search#search'

  # Session
  get '/login' => 'session#new', :as => "login"
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy', :as => "logout"

end
