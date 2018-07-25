class TasksController < ApiController

  def index
    project = Project.find_by(id: params[:project_id])
    tasks = Task.where(project: project)
    render json: tasks.to_json
  end

  def destroy
    project = Project.find_by(id: params[:project_id])
    task = Task.find_by(project: project, id: params[:id], )
    if task
      Task.destroy(task.id)
      render json: { message: "{}" }, status: :ok
    else
      render json: { code: 404 }
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :priority, :completed)
  end

end

