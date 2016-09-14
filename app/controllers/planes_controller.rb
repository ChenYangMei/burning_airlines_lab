class PlanesController < ApplicationController

  def index
    @planes = Plane.all
  end

  def show
    @plane = Plane.find(params[:id])
  end

  def new
    @plane = Plane.new
  end

  def create
    # @plane = Plane.find(params[:id])
    plane = Plane.create(plane_params)
    redirect_to planes_path
  end


  def edit
    @plane = Plane.find(params[:id])
  end

  def update
    plane = Plane.find(params[:id])
    plane.update(plane_params)
    redirect_to plane_path(plane)
  end

  def destroy
    plane = Plane.find(params[:id])
    plane.destroy
    redirect_to planes_path
  end

  private
  def plane_params
    params.require(:plane).permit(:name, :row, :column)
  end
end
