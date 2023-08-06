Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'homepage#index'
  # Defines the root path route ("/")
  resources 'registration', only: [:create, :index]
  # root "articles#index"

  # resources
  resources 'resources', only: [:index, :show, :create, :update]
end
