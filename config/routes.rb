Rails.application.routes.draw do
  
  # get "/", to: "hikes#index"
  
  
  get "users/:id", to: "users#show"
  get "hikes/:id", to: "hikes#show"


  post "/login", to: "login#create"

  post "/signup", to: "users#create"


  resources :users, only: [:index, :create, :show]
  # 
  resources :hikes, only: [:index]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
