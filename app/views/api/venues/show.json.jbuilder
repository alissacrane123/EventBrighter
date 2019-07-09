json.partial! '/api/venues/venue', venue: @venue

json.events do 
  @venue.events.each do |event|
    json.set! event.id do 
      json.partial! '/api/events/event', event: event 
    end
  end 
end

