import React, {Component} from "react";
import MainBanner from "./MainBanner";
import Packages from "./Packages";
import ChatBox from "./chat/ChatBox";
import Blog from "./Blog";
import Review from "./Review";
import Info from './Info'
import Askiiec from "./Askiiec";
import Partners from "./Partners";
import StudentForm from './StudentForm.tsx';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div style={{position: 'relative'}}>
        <ChatBox />
        <MainBanner />
        <Info />
        <StudentForm />
        <Packages />
        <Askiiec />
        <Blog />
        <Review />
        <Partners />
      </div>
    );
  }
}

export default HomePage;
