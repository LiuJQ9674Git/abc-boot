var React = require('react');
var ReactDom = require('react-dom');
var CommentBox = require('./CommentBox');

ReactDom.render(
    <CommentBox url="/comments" pollInterval={2000} />,
    document.getElementById('commentbox')
);
