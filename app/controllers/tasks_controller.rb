class TasksController < ApiController

  def index
    project = Project.find_by(id: params[:project_id])
    tasks = Task.where(project: project)
    render json: tasks.to_json
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :priority, :completed)
  end

end

