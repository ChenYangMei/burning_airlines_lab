# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Plane.destroy_all

p1 = Plane.create :name => "747", :row=> 10, :column=>6
p2 = Plane.create :name => "757", :row=> 15, :column=>8
p3 = Plane.create :name => "777", :row=> 20, :column=>10


Flight.destroy_all
f1 = Flight.create :name => "ABC", :origin => "Sydney", :destination => "New York", :date => "2016/10/12"
f2 = Flight.create :name => "DEF", :origin => "Hongkong", :destination => " Paris", :date => "2016/10/13"
f3 = Flight.create :name => "GHI", :origin => "Auckland", :destination => "Perth", :date => "2016/10/14"
f4 = Flight.create :name => "JKL", :origin => "Brisbane", :destination => "Queenstown", :date => "2016/10/15"
f5 = Flight.create :name => "MNO", :origin => "Stockholm", :destination => "London", :date => "2016/10/16"
f6 = Flight.create :name => "PQR", :origin => "Houston", :destination => "Buenos Aires", :date => "2016/10/17"

p1.flights << f1 << f2
p2.flights << f3 << f4
p3.flights << f5 << f6

User.destroy_all
u1 = User.create :name => "Samit", :email => "samit@ga.co", :password => "chicken", :password_confirmation => "chicken", :admin => true
u2 = User.create :name => "Yangmei", :email => "yangmei@ga.co", :password => "chicken", :password_confirmation => "chicken"
u3 = User.create :name => "Badger", :email => "badger@ga.co", :password => "chicken", :password_confirmation => "chicken"

u1.flights << f1 << f2
u2.flights << f2 << f3
u3.flights << f3 << f4 << f5 << f6

Reservation.destroy_all
r1 = Reservation.create :row => 1, :column => 1
r2 = Reservation.create :row => 2, :column => 2

u2.reservations << r1
u3.reservations << r2

f1.reservations << r1 << r2
