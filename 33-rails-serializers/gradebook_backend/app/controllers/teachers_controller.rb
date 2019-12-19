class TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    render json: @teachers
  end


  def show
    @teacher = Teacher.find(params[:id])
    render json: {teacherObject: TeacherSerializer.new(@teacher), token: "STUFF"}
    # only: [:id, :name, :subject], include: {classrooms: {only: [:id, :name], include: {assignments: {only: [:id, :name]}}}}
  end

end
