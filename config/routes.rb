Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources 'registration', only: [:create, :index]
      resources 'resources', only: [:show, :create, :update]
      resources 'sessions', only: [:create, :destroy]
      get 'sessions/authenticate', to: "sessions#authenticate"
    end
  end

  root 'homepage#index'
  match '*path', to: 'homepage#index', via: :all
end
