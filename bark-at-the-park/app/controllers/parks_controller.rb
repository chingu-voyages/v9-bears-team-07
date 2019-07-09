class ParksController < ApplicationController
  before_action :set_park, only: [:show, :update, :destroy, :checkin, :checkout]

  # GET /parks
  def index
    @parks = Park.all

    render json: @parks
  end

  # GET /parks/1
  def show
    render json: @park
  end

  # POST /parks
  def create
    @park = Park.new(park_params)

    if @park.save
      render json: @park, status: :created, location: @park
    else
      render json: @park.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /parks/1
  def update
    if @park.update(park_params)
      render json: @park
    else
      render json: @park.errors, status: :unprocessable_entity
    end
  end

  def checkout
    @user = User.find(params['park']['user']['id'])
    if @park.users.delete(@user)
      render plain: "You have checked out. Thanks for visiting!"
    end
  end

  def checkin
    @user = User.find(params['park']['user']['id'])
    if @user
      if @park.users.include?(@user)
        render plain: "You're already checked in!"
      else
        @park.users << @user
        if @park.save
          render json: @park, include: :users, status: :created, location: @park
        else
          render json: @park.errors, status: :unprocessable_entity
        end
      end
    end
  end

  # DELETE /parks/1
  def destroy
    @park.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_park
      @park = Park.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def park_params
      params.require(:park).permit(:name, :address, :opening_time, :closing_time)
    end
end
