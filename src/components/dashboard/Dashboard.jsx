import React from "react"
import { connect } from "react-redux"
import { Grid } from "semantic-ui-react"
import User from "./user/User.jsx"
import TweetList from "./tweets/TweetList.jsx"
import TweetModal from "./tweets/TweetModal.jsx"
import { openModal, closeModal } from "../../actions/tweetModal"
import Notification from "./notification/Notification.jsx"

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    const {
      authedUser,
      posts,
      users,
      tweetModal,
      openModal,
      closeModal,
      addPost
    } = this.props
    return (
      <Grid>
        <Grid.Column width={4}>
          <User user={authedUser} />
        </Grid.Column>
        <Grid.Column width={8}>
          <TweetList posts={posts} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Notification users={users} />
        </Grid.Column>
        <TweetModal
          tweetModal={tweetModal}
          openModal={openModal}
          closeModal={closeModal}
          addPost={addPost}
        />
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  authedUser: state.authedUser,
  posts: state.posts,
  users: state.users,
  tweetModal: state.tweetModal
})

export default connect(
  mapStateToProps,
  { openModal, closeModal }
)(Dashboard)
