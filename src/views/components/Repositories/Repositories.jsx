import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CommitHistory } from '../commitHistory';
import { Pagination } from '../pagination';
import { getRepositories } from '../../../store/actions/repositories';
import Loading from '../loading';

const Repositories = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const commits = useSelector(state => state.repositories);

  const renderMain = async (user, repo, page) => {
    if (user === '' || repo === '') {
      return false;
    }

    const data = { search: { user, repo }, page };
    setIsLoading(true);
    await dispatch(getRepositories(data));
    setIsLoading(false);
    setPage(page);
  };
  return (
    <>
      <Pagination
        nowPage={page}
        totalCommitNum={10000}
        callback={arg => renderMain(commits.user, commits.repo, arg)}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CommitHistory
            jsonList={commits.data}
            user={commits.user}
            repo={commits.repo}
          />
        </>
      )}
    </>
  );
};

export default Repositories;
