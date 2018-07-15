class ProjectsController < ApiController

  private

    def project_params
      params.require(:project).permit(:title, :description)
    end
end

