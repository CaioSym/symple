Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users

  scope '/api' do
    resources :projects, only: [:index, :create, :update, :destroy] do 
      resources :tasks, only: [:index, :create, :update, :destroy]
    end
  end

  get '/project/:project_id',
    to: 'main#projects'

  root 'main#index'

  #if all else fails go to root
  get '*path', to: 'main#index'
end
