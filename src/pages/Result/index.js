import React, { Component } from "react";
import "./styles.css";
import ProfileBox from "../../components/molecules/ProfileBox";
import IconBox from "../../components/molecules/IconBox";
import ReposBox from "../../components/molecules/ReposBox";
import ApiService from "../../service/api";
import iconLocation from "../../assets/icons/location-icon.svg";
import iconFollowers from "../../assets/icons/followers-icon.svg";
import iconRepos from "../../assets/icons/repositorie-icon.svg";
import iconStar from "../../assets/icons/star-icon.svg";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      user: {},
    };
  }

  componentDidMount = async () => {
    const user = this.props.history.location.state.login;
    // console.log(this.props.history);
    const response = await ApiService.get(`/users/${user}/repos`);
    this.setState({
      data: response.data,
      user: this.props.history.location.state,
    });
  };

  render() {
    const { data, user } = this.state;
    console.log(data, user);

    return (
      <div className='result-content'>
        <div className='profile-box'>
          <ProfileBox
            userImg={user.avatar_url}
            userName={user.name}
            userSubtitle={user.bio}
          />
          <IconBox
            iconLocation={iconLocation}
            userLocation={user.location}
            iconRepos={iconRepos}
            userRepos={user.public_repos}
            iconFollowers={iconFollowers}
            userFollowers={user.followers}
            iconFollowing={iconFollowers}
            userFollowing={user.following}
          />
        </div>
        <div className='repo-box'>
          {data.map((repo) => (
            <ReposBox
              repoName={repo.name}
              repoDescription={repo.description}
              starIcon={iconStar}
              starNumber={repo.stargazers_count}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Result;
