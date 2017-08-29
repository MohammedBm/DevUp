class Api::V1::UsersController < Api::ApplicationController

    def new

      @user = User.new
    end

    def index
      @user = User.order(created_at: :desc)
      render json: @user
    end

    def create
      @user = User.new user_params
      if @user.save
        puts 'user saved'
        render json: {
          jwt: encode_token({
            id: @user.id,
            full_name: @user.full_name,
            username: @user.username
          })
        }
      else
        puts 'user not save'
      end
    end

    def show
      @user = User.find params[:id]
    end

    private

    def user_params
      params.require(:user).permit(
        :full_name,
        :username,
        :email,
        :password_digest
      )
    end
    def encode_token(payload = {}, exp = 24.hours.from_now)
      # jwt tokens once issued cannot be revoked therefore it's best practice
      # to give an expiration date. `exp` will act as the expiration in the payload.
      # We send it as a timestamp.
      payload[:exp] = exp.to_i
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

end
