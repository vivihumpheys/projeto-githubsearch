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
    repo: "",
    user: ""
   
    }
  };

  componentDidMount = async() => {
    const getRepos = await ApiService.get(``);
    this.setState({repo: getRepos.data, user: getRepos.data})
  }


  render(){
    const{repo} = this.state
    const{user} = this.state
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
