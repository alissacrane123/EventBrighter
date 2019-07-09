class Event < ApplicationRecord

  belongs_to :venue, class_name: :Venue, foreign_key: :venue_id

end
