import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import image1 from '../../assets/feature/gambar1.png';
import image2 from '../../assets/feature/gambar2.png';
import image3 from '../../assets/feature/gambar3.png';

const Appkomen = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <div id="comments" className="comments">
                          <div className="titleHolder">
                                      <h2>Comments</h2>
                                      <p>Komentar kalian</p>
                                  </div>
    <Comment
      actions={actions}
      author={<a>Nolep</a>}
      className="contentHolder"
      avatar={
        <Avatar
          src={image1}
          alt="gambar"
        />
      }
      content={
        <p>
          PERTAMAXXXX
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
    <Comment
      actions={actions}
      author={<a>Psikopat-desu</a>}
      avatar={
        <Avatar
          src={image2}
          alt="gambar"
        />
      }
      content={
        <p>
          Konten menarik dan ajib
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />

    <Comment
          actions={actions}
          author={<a>Barbie</a>}
          avatar={
            <Avatar
              src={image3}
              alt="gambar"
            />
          }
          content={
            <p>
              Suka sama adminnya
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
    </div>
  );
};

export default Appkomen;