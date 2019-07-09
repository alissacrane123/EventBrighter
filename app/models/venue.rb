class Venue < ApplicationRecord

  has_many :events, class_name: :Event, foreign_key: :venue_id
  belongs_to :owner, class_name: :User, foreign_key: :owner_id

end
