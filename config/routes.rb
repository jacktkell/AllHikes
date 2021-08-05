Rails.application.routes.draw do
  resources :users, only: [:index, :create, :show]
  resources :hikes, only: [:index, :show]
  resources :login, only: [:create]
  resources :trip, only: [:create]
  resources :comments, only: [:create, :index, :show]

  # delete 'comments', to: 'comments#destroy'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
