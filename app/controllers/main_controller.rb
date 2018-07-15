# frozen_string_literal: true

class MainController < ApplicationController
  before_action :authenticate_user!

  layout "main"

  def index
    @app_props = { name: "Stranger" }
  end
end
