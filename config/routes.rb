Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create, :show,]
    resources :photos, only: [:create, :update, :show, :index]
    resource :session, only:[:create, :destroy]

  end
end