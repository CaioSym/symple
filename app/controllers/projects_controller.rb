class ProjectsController < ApiController

  def index
    @projects = Project.where(user: current_user)
    render json: @projects.to_json
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end

end

