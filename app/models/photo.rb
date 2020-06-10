# == Schema Information
#
# Table name: photos
#
#  id              :bigint           not null, primary key
#  caption         :string           not null
#  location        :string           not null
#  views           :integer          default(0)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  photographer_id :integer          not null
#
# Indexes
#
#  index_photos_on_location         (location)
#  index_photos_on_photographer_id  (photographer_id)
#
class Photo < ApplicationRecord
    validates :caption, presence: true
    validates :location, presence: true


    belongs_to :photographer,
    foreign_key: :photographer_id,
    class_name: :User

    has_many :likes,
    foreign_key: :liker_id,
    class_name: :Like

    has_one_attached :image




end
