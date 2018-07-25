# frozen_string_literal: true

class MainController < ApplicationController
  before_action :authenticate_user!

  layout "main"

  def index
    app_props[:projects] = Project.where(user: current_user)
  end

  def projects
    app_props[:projects] = Project.where(user: current_user)
    app_props[:tasks][params[:project_id]] = Task.where(project_id: params[:project_id])
    render "index"
  end

  private

  def app_props
    return @app_props if @app_props != nil
    @app_props = {
      projects: [],
      tasks: {},
      screens: {
        projects: {
          form: nil
        },
        tasks: {
          form: nil
        }
      }
    }
  end
end
