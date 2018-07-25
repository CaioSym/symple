Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users

  scope '/api' do
    resources :projects, only: [:index, :create, :update, :destroy] do 
      resources :tasks, only: [:index, :create, :update, :destroy]
    end
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'
end
