Rails.application.routes.draw do

  resources :reservations
  resources :planes
  resources :users

  # Session
  get '/login' => 'session#new', :as => "login"
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy', :as => "logout"

end
