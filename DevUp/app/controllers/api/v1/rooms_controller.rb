class Api::V1::RoomsController < Api::ApplicationController
  before_action :find_room, only: [:show]
  before_action :authenticate_user!

  def index
    @rooms = Room.order(created_at: :desc).includes(:user)
    render json: @rooms
  end

  def show
    @room = Room.find(params[:id])
    render json: @room
  end

  def create
    @room = Room.new(room_params)
    @room.user = current_user

    if @room.save
      room_user = RoomUser.new user: current_user , room: @room
      room_user.save!
      render json: {id: @room.id,title: @room.title, creawter: @room.creater, activity: @room.activity, game: @room.game, time: @room.time, limit: @room.limit}
    else
      render json: {errors: @room.errors.full_messages}, status: 200
    end
  end

  def destroy
    if @room.destory
      head :ok
    else
      head :bad_request
    end
  end


  private

  def room_params
    params.require(:room).permit(:id,:title,:creater,:activity,:game,:time,:limit,:user_id)
  end

  def find_room
    @room = Room.find(params[:id])
  end

  end
