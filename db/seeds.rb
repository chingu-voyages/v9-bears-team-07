# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# t.string "name"
# t.string "address"
# t.time "opening_time"
# t.time "closing_time"
# t.decimal "location", default: [], array: true

parks = [
  {
    name: 'Tudek Dog Park',
    address: 'Park Crest Ln, State College, PA 16803',
    location: [40.8004715, -77.891893]
  },
  {
    name: 'Para Mascotas Park',
    address: 'Av. de los Constituyentes, 3000-2802, Buenos Aires, Argentina',
    location: [-34.591841, -58.4805706]
  },
  {
    name: 'Canil',
    address: 'Camino interno Parque Centenario, C1414 CABA, Argentina',
    location: [-34.6055893, -58.4338099]
  }
]

parks.each do |park|
  Park.create(park)
end
