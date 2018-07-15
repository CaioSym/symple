ActiveAdmin.register Project do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
belongs_to :user
permit_params :title, :description



#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end


sidebar "Project Details", only: [:show, :edit, :delete] do
  ul do
    li link_to "Tasks",    admin_project_tasks_path(resource)
  end
end

end
