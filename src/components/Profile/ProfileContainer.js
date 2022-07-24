import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, setLike} from "../../redux/profile_reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = this.props.userId
        }
        this.props.getUserProfile(profileId)
        this.props.getStatus(profileId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} setLike={this.props.setLike} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, setLike}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
