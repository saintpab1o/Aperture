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