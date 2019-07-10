Rails.application.routes.draw do
  resources :parks
  resources :users
  post '/auth/google_login' => 'auth#google_login'
  post '/auth/email_login' => 'auth#email_login'
  patch '/checkin/:id' => 'parks#checkin'
  patch '/checkout/:id' => 'parks#checkout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
