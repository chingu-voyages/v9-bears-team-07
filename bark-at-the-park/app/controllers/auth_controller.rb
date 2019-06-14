class AuthController < ApplicationController

  def google_login
    validator = GoogleIDToken::Validator.new
    begin
      payload = validator.check(params[:client_id], "315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com")
      email = payload['email']
    rescue GoogleIDToken::ValidationError => e
      report "Cannot validate: #{e}"
    end
  end
end
