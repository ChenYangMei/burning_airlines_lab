json.extract! reservation, :id, :row, :column, :created_at, :updated_at, :flight_id
json.url reservation_url(reservation, format: :json)
