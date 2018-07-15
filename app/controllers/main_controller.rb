# frozen_string_literal: true

class MainController < ApplicationController
  layout "main"

  def index
    @app_props = { name: "Stranger" }
  end
end
