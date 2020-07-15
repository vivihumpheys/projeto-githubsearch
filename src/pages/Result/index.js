import React, { Component } from "react";
import "./styles.css";
import ProfileBox from "../../components/molecules/ProfileBox";
import IconBox from "../../components/molecules/IconBox";
import ReposBox from "../../components/molecules/ReposBox";
import ApiService from '../../service/api';

class Result extends Component {
  constructor(){
    super();
    this.state={
    data:[],
    user:{}
    }
  };

  componentDidMount = async() => {
    const user = this.props.history.location.state.login;
    // console.log(this.props.history);
    const response = await ApiService.get(`/users/${user}/repos`);
    this.setState({data: response.data, user:this.props.history.location.state})
  };


  render(){
    const{data, user} = this.state;
    console.log(data, user);

    return(
      <div>
      {/* <ProfileBox 
      userImg={}
      userName={}
      userSubtitle={} 
      />
      <IconBox 
      icon={}
      userLocation={}
      userRepos={}
      userFollowers={}
      userFollowing={}
      />
      <ReposBox
      repoName={}
      repoDescription={}
      starIcon={}
      starNumber={}
      /> */}
    </div>
    )
  };
};



export default Result;
