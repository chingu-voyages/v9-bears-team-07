class AuthController < ApplicationController

  def google_login
    @resp = Farday.get 'https://oauth2.googleapis.com/tokeninfo?id_token=XYZ123'
  end
end
