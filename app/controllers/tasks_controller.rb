class TasksController < ApiController

  def index
    project = Project.find_by(user: current_user, id: params[:project_id])
    tasks = Task.where(project: project)
    render json: tasks.to_json
  end

  def create
    project = Project.find_by(user: current_user, id: params[:project_id])
    task = project.tasks.build(task_params)
    if task.save
        render json: task.to_json
    else
      render json: { code: 500 }
    end
  end

  def update
    project = Project.find_by(user: current_user, id: params[:project_id])
    task = Task.find_by(project: project, id: params[:id], )
    if task
      task.update(task_params)
      render json: task.to_json
    else
      render json: { code: 404 }
    end
  end

  def destroy
    project = Project.find_by(user: current_user, id: params[:project_id])
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

