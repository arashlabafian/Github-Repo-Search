import React from 'react';
import emoji from 'node-emoji';
import ReactMarkdown from 'react-markdown';
import '../../../styles/commit_row.css';

export const CommitRow = props => {
  const { json, rowHeight, user, repo } = props;
  const {
    authorName,
    authorUrl,
    avatarUrl,
    date,
    isVerified,
    commitMessage,
    commitUrl,
  } = json;
  const [messageTitle, messageBody] = commitMessage.split(/(?<=^[^\n]+?)\n/);
  const verifyMark =
    isVerified === true ? (
      <div className='table-list-cell'>
        <div className='verify-mark'>Verified</div>
      </div>
    ) : (
      <></>
    );

  return (
    <li className='commit-list-item' style={{ height: rowHeight }}>
      <div className='table-list-cell' style={{ width: '800px' }}>
        <div className='commit-title'>
          <a
            className='message-link'
            data-pjax='true'
            href={commitUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            {emoji.emojify(messageTitle)}
          </a>
          <ReactMarkdown source={emoji.emojify(messageBody)} />
        </div>
        <div className='author-area'>
          <a href={authorUrl} target='_blank' rel='noopener noreferrer'>
            <img
              className='author-avatar'
              alt='author-avatar'
              src={avatarUrl}
            />
          </a>
          <a
            className='author-link'
            data-pjax='true'
            href={`https://github.com/${user}/${repo}/commits?author=${authorName}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {authorName}
          </a>
          <span className='date'>
            committed on {date.toLocaleDateString()}
            &nbsp;
            {date.toLocaleTimeString()}
          </span>
        </div>
      </div>
      {verifyMark}
    </li>
  );
};
