class TasksController < ApiController

  def index
    project = nil
    @tasks = Task.where(project: project)
    render json: @tasks.to_json
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :priority, :completed)
  end

end

