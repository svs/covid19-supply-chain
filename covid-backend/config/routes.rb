Rails.application.routes.draw do
  get 'ui_test/index'
  
  root 'ui_test#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
