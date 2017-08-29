class Api::V1::RoomUsersController < Api::ApplicationController
  before_action :find_room, only: [:create]
  before_action :find_room_user, only: [:destroy]

  def create
    # @rooms = Room.order(created_at: :desc).includes(:user)
    @room_users = RoomUser.order(created_at: :desc)
    @rooms = Room.order(created_at: :desc).includes(:user)

    room_user = RoomUser.new user: current_user , room: @room
    if room_user.save
      puts 'joined the room'
      render json: @room
    else
      render json: @room
      puts 'did not join'
      room_user.errors.full_messages.join(',')
    end
  end

  def index
    @user = RoomUser.order(created_at: :desc)
    render json: @user
  end



  def destroy

    if @room_user.destroy
      render json: @room_user.room
      puts 'left the room'
    else
      render json: @room_user.room
      puts 'joined the room'
    end
  end

    private

    def find_room
      @room = Room.find(params[:room_id])
    end

    def find_room_user
      @room_user = RoomUser.find(params[:id])
    end

end
