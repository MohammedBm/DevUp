Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :rooms, only: %i[index show create] do
        resources :comments, only: %i[create destroy]
      end
      resources :tokens, only: [:create]
      resources :users, only: %i[new show create index]
      resources :room_users, only: %i[create destroy index]

    end
  end

end
