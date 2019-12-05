import PropTypes from 'prop-types';
import React from 'react';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post: { id, user, title, body, commentList } }) => (
  <div className="ui green segment">
    <div className="ui left aligned container">
      <User userObj={user} />
    </div>
    <div className="ui hidden divider" />
    <div className="ui raised segment">
      <div>
        <b className="first">{`Post ${id}: ${title}`}</b>
        <div className="ui hidden divider" />
        <p>
          { `"${body}"`}
        </p>
        <div className="ui hidden divider" />
      </div>
    </div>
    <div className="ui hidden divider" />
    <div className="ui segment">
      <CommentList commentList={commentList} />
    </div>
  </div>
);

Post.propTypes
  = { post: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Post;
