# frozen_string_literal: true

class MainController < ApplicationController
  before_action :authenticate_user!

  layout "main"

  def index
    projects = Project.where(user: current_user)
    @app_props = { name: "Stranger", projects: projects }
  end
end
