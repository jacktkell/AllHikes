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
        comments = Comment.find(params[:id])
        if (comments) 
           comments.destroy
        end
        render json: comments
    end 

    def show
        comment = Comment.find_by(id: params[:id])
        if comment
           render json: comment
        #    comment.destroy
        else
           render json: {error: "comment not found"}
        end
    end
end
