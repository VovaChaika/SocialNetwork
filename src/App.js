import React, {Component} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {getInitialized} from "./redux/app_reducer";
import Preloader from "./components/common/preloader/Preloader";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

class App extends Component {
    componentDidMount() {
        this.props.getInitialized()
    }

    render() {
        if (!this.props.initialized) {
            return <><Preloader/><div className={"careful"}>PLEASE USE VPN IF THE SITE ISN'T LOADING</div></>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route path="/profile/:profileId"
                               element={<ProfileContainer/>}/>
                        <Route path="/profile/*"
                               element={<ProfileContainer/>}/>
                        <Route path="/users/*"
                               element={<UsersContainer/>}/>
                        <Route path="/login/*"
                               element={<Login/>}/>
                        <Route path="/settings/*"
                               element={<Subscribe/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>


        );
    }


}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

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
    withRouter,
    connect(mapStateToProps, {getInitialized}))
(App)