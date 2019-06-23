class AuthController < ApplicationController

  def google_login
    validator = GoogleIDToken::Validator.new

    begin
      payload = validator.check(params[:client_id], "315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com")
    rescue GoogleIDToken::ValidationError => e
      puts "Cannot validate: #{e}"
    end
    
    if payload
      @user = User.find_or_create_by(email: payload['email']) do |u|
        u.name = payload['name']
        u.google_user = true
        u.logged_in = true
      end

      if @user.save
        session[:user_id] = @user.id
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  end

  def email_login
    @user = User.find_or_create_by(email: params['auth']['email']) do |u|
      u.email = params['auth']['email']
      u.password = params['auth']['password']
      u.logged_in = true
    end

    if @user.save
      session[:user_id] = @user.id
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end

  end
end

# {"iss"=>"accounts.google.com",
#  "azp"=>"315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com",
#  "aud"=>"315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com",
#  "sub"=>"102120687465434104307",
#  "email"=>"jebediahelliott@gmail.com",
#  "email_verified"=>true,
#  "at_hash"=>"qHwy0L1UfUdkgzRRRuRstQ",
#  "name"=>"Jebediah Elliott",
#  "picture"=>
#   "https://lh5.googleusercontent.com/-X73fjHXK2ts/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfwq-c18c12XIaau7H2-WG1zN0ksQ/s96-c/photo.jpg",
#  "given_name"=>"Jebediah",
#  "family_name"=>"Elliott",
#  "locale"=>"en",
#  "iat"=>1560540713,
#  "exp"=>1560544313,
#  "jti"=>"da1999931399534e5d2cdae77f15a8a3dc71dfa0",
#  "cid"=>"315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com"}
