import React from "react";

const commentsData = [
  {
    name: "Abhishek Singh",
    text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    repiles: [
      {
        name: "Abhishek Singh",
        text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        repiles: [
          {
            name: "Abhishek Singh",
            text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            repiles: [
              {
                name: "Abhishek Singh",
                text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                repiles: [],
              },
              {
                name: "Abhishek Singh",
                text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                repiles: [
                  {
                    name: "Abhishek Singh",
                    text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                    repiles: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Abhishek Singh",
        text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        repiles: [
          {
            name: "Abhishek Singh",
            text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            repiles: [],
          },
          {
            name: "Abhishek Singh",
            text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            repiles: [],
          },
          {
            name: "Abhishek Singh",
            text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            repiles: [],
          },
        ],
      },
      {
        name: "Abhishek Singh",
        text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        repiles: [
          {
            name: "Abhishek Singh",
            text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            repiles: [
              {
                name: "Abhishek Singh",
                text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                repiles: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Abhishek Singh",
    text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    repiles: [
      {
        name: "Abhishek Singh",
        text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        repiles: [],
      },
    ],
  },
  {
    name: "Abhishek Singh",
    text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    repiles: [
      {
        name: "Abhishek Singh",
        text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        repiles: [
          {
            name: "Abhishek Singh",
            text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            repiles: [],
          },
        ],
      },
    ],
  },
  {
    name: "Abhishek Singh",
    text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    repiles: [],
  },
  {
    name: "Abhishek Singh",
    text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    repiles: [
      {
        name: "Abhishek Singh",
        text: "Lorem ispum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        repiles: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div>
      <div className="bg-gray-200 w-fit flex flex-row justify-start items-center py-2 my-3 rounded-2xl">
        <img
          className="h-12 mx-2"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
        <div>
          <p className="font-bold text-xl p-2">{name}</p>
          <p className="px-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-10 border-l-2 ">
        <CommentList comments={comment.repiles} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="font-bold text-3xl">Nested Comments : </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
