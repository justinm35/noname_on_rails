Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'homepage#index'
  # Defines the root path route ("/")
  get 'registration', to: 'registration#index'
  # root "articles#index"
end
