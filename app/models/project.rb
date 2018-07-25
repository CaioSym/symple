class Project < ApplicationRecord
  belongs_to :user, inverse_of: :projects
  has_many :tasks, inverse_of: :project
end
