class Api::EventsController < ApplicationController

  def index

    city = params[:filters][:city];
    event_type = params[:filters][:event_type]

    if city.length > 0 && event_type.length > 0
      @events = Event.where(["city = ? AND event_type = ?", city, event_type]);
    elsif city.length > 0
      @events = Event.where(["city = ?", city]);
    elsif event_type.length > 0
      @events = Event.where(["event_type = ?", event_type]);
    else 
      @events = Event.all
    end
  end

  def create
    @event = Event.new(event_params)
    @event.venue_id = current_user.venue.id 
    @event.city = current_user.venue.city 
    @event.state = current_user.venue.state 

    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show 
    @event = Event.find(params[:id]) 
  end

  private

  def event_params 
    params.require(:event).permit(:title, :event_type,
      :description, :date, :start_time, :end_time, :price )
  end
end
