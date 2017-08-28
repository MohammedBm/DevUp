import React, {Component} from 'react';
import {Room} from '../../utls/requests';
import RoomDetails from '../RoomDetails';
import CommentForm from '../CommentForm';

class RoomShowPage extends Component{
  constructor(props){
    super(props);
    this.state={
      room: {}
    }
  }

  createComment = (comment) => {
    const id = this.state.room.id
    Room
        .postComment(id,comment)
        .then((room)=>
        this.setState({room:room})
      )
  }


  componentDidMount(){
    const {id} = this.props.match.params;
    Room.get(id).then(room=>this.setState({room}))
  }

  render(){
    const {room} = this.state;
    console.log(this.state.room.id);
    return(
      <div className='RoomShowPage'>
        <RoomDetails {...this.state.room}/>
        <CommentForm onSubmit = {this.createComment} />
      </div>
    )
  }

}

export default RoomShowPage;
