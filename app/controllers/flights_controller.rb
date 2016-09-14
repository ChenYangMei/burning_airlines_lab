class FlightsController < ApplicationController

    def index
      @flights = Flight.all
    end

    def show
      @flight = Flight.find(params[:id])
    end

    def new
      @flight = Flight.new
    end

    def create
      # @flight = Flight.find(params[:id])
      flight = Flight.create(flight_params)
      redirect_to flights_path
    end


    def edit
      @flight = Flight.find(params[:id])
    end

    def update
      flight = Flight.find(params[:id])
      flight.update(flight_params)
      redirect_to flight_path(flight)
    end

    def destroy
      flight = Flight.find(params[:id])
      flight.destroy
      redirect_to flights_path
    end

    private
    def flight_params
      params.require(:flight).permit(:name, :booked_seats, :origin, :destination, :date)
    end
end
