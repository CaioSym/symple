Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users

  scope '/api' do
    resources :projects do 
      resources :tasks
    end
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'
end
