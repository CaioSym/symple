class TasksController < ApiController

  private

    def task_params
      params.require(:task).permit(:title, :description)
    end
end

