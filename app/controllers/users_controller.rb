class UsersController < ApplicationController
  before_action :authorise, :only => [:index, :show, :edit]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @user = User.find params[:id]
  end

  def update
    user = User.find params[:id]
    user.update(user_params)
    redirect_to user_path(user)
  end

  def destroy
    user = User.find params[:id]
    user.destroy

    redirect_to users_path()
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :admin)
  end

  def authorise
    flash[:error] = "You need to be logged in to see that" unless @current_user.present?
    redirect_to login_path unless @current_user.present?
  end
end
