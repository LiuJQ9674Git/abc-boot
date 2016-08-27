var React = require('react');
var ReactDom = require('react-dom');
var CommentBox = require('./CommentBox');

ReactDom.render(
    <CommentBox url="http://localhost:3000/comments" pollInterval={2000} />,
    document.getElementById('commentbox')
);
