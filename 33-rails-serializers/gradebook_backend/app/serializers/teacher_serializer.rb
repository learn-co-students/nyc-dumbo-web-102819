class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :subject, :name, :professor_name, :screamedName

  has_many :classrooms
  # has_many :assignments


  def screamedName
    theTeacherInstance = self.object
    theTeacherInstance.name.upcase
  end

end
