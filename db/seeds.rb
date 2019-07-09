
Venue.destroy_all
Event.destroy_all
User.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(email: "alissa@gmail.com", password: "password", fname: "alissa", lname: "crane", city: 'san francisco', state: 'ca')
user2 = User.create!(email: "brandon@gmail.com", password: "password", fname: "brandon", lname: "crane", city: 'san francisco', state: 'ca')
user3 = User.create!(email: "rowan@gmail.com", password: "password", fname: "rowan", lname: "daniels", city: 'san francisco', state: 'ca')

venue1 = Venue.create!(name: 'Sushi Rapture', venue_type: 'restaurant', city: 'san fransisco', state: 'ca', owner_id: user1.id)
venue2 = Venue.create!(name: 'The Independent', venue_type: 'music', city: 'san fransisco', state: 'ca', owner_id: user2.id)
venue3 = Venue.create!(name: 'Off the Grid', venue_type: 'other', city: 'san fransisco', state: 'ca', owner_id: user3.id)

event1 = Event.create!(venue_id: venue1.id, title: 'Happy Hour', city: 'san francisco', state: 'ca', event_type: 'food', date: Date.new(2019, 8, 1))
event2 = Event.create!(venue_id: venue2.id, title: 'The Neighborhood', city: 'san francisco', state: 'ca', event_type: 'music', date: Date.new(2019, 8, 8))
event3 = Event.create!(venue_id: venue3.id, title: 'Food Truck Meetup', city: 'san francisco', state: 'ca', event_type: 'food', date: Date.new(2019, 8, 9))