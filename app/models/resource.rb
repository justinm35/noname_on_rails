class Resource < ApplicationRecord
  has_many :objects, class_name: "object", foreign_key: "reference_id"
end
