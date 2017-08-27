class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy


  has_many :rooms, through: :taggings

  validates :name, presence: true, uniqueness: { case_sensitive: false }

end
