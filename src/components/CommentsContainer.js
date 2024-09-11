import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "Prince Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Prince Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Prince Gupta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Prince Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Prince Gupta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Prince Gupta",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Prince Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Prince Gupta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Prince Gupta",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Prince Gupta",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 ml-10 border border-l-black">
        <CommentList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold pb-2 dark:text-white">Comments</h1>
      <hr className="mb-5"></hr>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
