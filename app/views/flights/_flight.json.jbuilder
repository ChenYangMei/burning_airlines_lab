json.extract! flight, :id, :name, :booked_seats, :origin, :destination, :date, :plane_id
json.url reservation_url(flight, format: :json)
json.plane flight.plane
