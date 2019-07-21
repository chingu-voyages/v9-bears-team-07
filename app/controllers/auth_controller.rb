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

      if @user.save && @user.authenticate(params['auth']['password'])
        session[:user_id] = @user.id
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end

    end
end
