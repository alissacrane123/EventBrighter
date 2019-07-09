class Api::VenuesController < ApplicationController

  def create
    @venue = Venue.new(venue_params)

    if @venue.save
      render "api/venues/show"
    else
      render json: @venue.errors.full_messages, status: 422
    end
  end

  private

  def venue_params 
    params.require(:venue).permit(:email, :password, :name, :venue_type,
      :price, :phone_num, :address, :city, :state, :country, :lat, :lng )
  end

end
