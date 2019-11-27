class SignupsController < ApplicationController
    def new 
        @signup = Signup.new
    end 

    def create 
        @signup = Signup.new(signup_params)

        if @signup.save 
        redirect_to "/campers/#{@signup.camper.id}"
        else 
        flash[:errors] = @signup.errors.full_messages
        redirect_to "/signups/new"
        end 
    end 

    private 

    def signup_params 
        params.require(:signup).permit(:camper_id, :activity_id, :time)
    end 
end
