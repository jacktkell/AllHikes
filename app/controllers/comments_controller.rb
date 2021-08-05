class CommentsController < ApplicationController
    def create 
        comment = Comment.create(user_params)
        # session[:comment_id] = comment.id 
        render json: comment, status: :created
    end

    def index
        render json: Comment.all 
    end

    def user_params
        params.require(:comment).permit(:user_id, :hike_id, :content)
    end

    def destroy
        comment = Comment.find(params[:id])
        if (comment) 
           comment.destroy
           render json: comment
        end
        
    end 


end
