class ProjectsController < ApiController

  def index
    projects = Project.where(user: current_user)
    render json: projects.to_json
  end

  def create
    project = current_user.projects.build(project_params)
    if project.save
        render json: project.to_json
    else
      render json: { code: 500 }
    end
  end

  def update
    project = Project.where(user: current_user, id: params[:project_id])
    if project
      project.update(title: 'Dave')
      render json: project.to_json
    else
      render json: { code: 404 }
    end
  end

  def destroy
    project = Project.where(user: current_user, id: params[:project_id])
    if project
      Project.destroy!(project)
      render json: { message: "removed" }, status: :ok
    else
      render json: { code: 404 }
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end



end

